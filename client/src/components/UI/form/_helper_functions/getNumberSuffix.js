const getNumberSuffix = (num) => {
  console.log('num pram',num)
  const lastDigit = num >= 10 ? num.toString()[num.toString().length - 1] : num;
  console.log('lastnumber', lastDigit);

  if ((lastDigit >= 4  && lastDigit <= 9) || (lastDigit % 10 === 0)) {
    return 'th';
  } else if (lastDigit === 3) {
    debugger;
    return 'rd';
  } else if (lastDigit === 2) {
    debugger;
    return 'nd';
  } else if (lastDigit === 1) {
    debugger;
    return 'st';
  }


};

export default getNumberSuffix;
