const handleResumeFormData = (formData) => {
  console.log('backend form data before tansformation', formData);

  const buildSkillCategories = (skillArray) => {
    if (!skillArray) return null;
    const result = skillArray.reduce((result, entry) => {
      const { skillRowTitle = '', skillRowString = '' } = entry;
      return Object.assign(result, { [skillRowTitle]: skillRowString });
    }, {});

    return result;
  }

  const transformedData = {
    contact: {
      meta: {
        'dataType': 'CONTACT',
        'hasTopBottomBorder': false
      },
      content: {
        'email': formData?.address,
        'name': formData?.userName,
        'phone': formData?.phone,
        'address': formData?.address
      }
    },
    companies: {
      meta: {
        dataType: 'WORK',
        hasTopBottomBorder: false
      },
      content: formData.workEntries.map((el) => {
        return {
          name: el?.workName,
          role: el?.roleTitle,
          dateString: el?.dateString,
          bullets: el?.workBulletString?.split('.'),
          isContract: el?.isContractor,
          setAgencyAsCompanyName: el?.showContractor
        }
      })
    },
    projects: {
      meta: {
        dataType: 'PROJECT',
        hasTopBottomBorder: false
      },
      content: formData?.projectEntries.map((el) => {
        return {
          name: el?.projectName,
          desc: el?.projectDescription,
          divider: ' - ',
          bullets: el?.workBulletString?.split('.')
        }
      })
    },
    education: {
      meta: {
        dataType: 'EDUCATION',
        hasTopBottomBorder: false
      },
      content: formData?.eduEntries.map((el) => {
        return {
          name: el?.eduName,
          dateString: el?.eduDateText,
          type: el?.eduType,
          locale: el?.eduLocale,
          bullets: el?.workBulletString?.split('.')
        }
      })
    },
    skills: {
      meta: {
        dataType: 'SKILL',
        layoutType: 'MULTI',
        hasTopBottomBorder: true
      },
      categories: buildSkillCategories(formData?.skillEntries)
    }
  };

  return transformedData;
};

module.exports = handleResumeFormData;