import formStages from '../../../../rules/formStages';

const getResumeFormSection = (formStageValue) => {
  return formStages[formStageValue];
};

export default getResumeFormSection;
