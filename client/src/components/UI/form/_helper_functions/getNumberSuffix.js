const getNumberSuffix = (num) => {
  const lastDigit = num >= 10 ? parseInt(num.toString()[num.toString().length - 1]) : num;

  if ((lastDigit >= 4  && lastDigit <= 9) || (lastDigit % 10 === 0) || (num >= 11 && num <= 13)) {
    return 'th';
  } else if (lastDigit === 3) {
    return 'rd';
  } else if (lastDigit === 2) {
    return 'nd';
  } else if (lastDigit === 1) {
    return 'st';
  }
};

export default getNumberSuffix;
