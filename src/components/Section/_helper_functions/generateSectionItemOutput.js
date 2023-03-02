import React from 'react';
import BulletList from '../_helper_components/BulletList';
import SkillListRow from '../_helper_components/SkillListRow';
import rules from '../../../rules/dataTypes';
import '../style.scss';

const generateSectionItemOutput = (sectionItemData = [], type) => {
  console.log('section item data to be mapped', sectionItemData);
  const { dataType, layoutType = '' } = sectionItemData?.meta;
  const itemClassName = dataType.toLowerCase();
  const isClassicSkillList = dataType === rules.SKILLS;
  console.log('is classic skill likst', isClassicSkillList);
  let settings = null;
  let ItemOutputArray = [];
  let tempOutput = [];


  console.log('section type', dataType);

  if (!sectionItemData?.content) return null;
  if (isClassicSkillList) settings = {
    isMulti: true,
    isUniform: false,
    data: sectionItemData
  }

  if (isClassicSkillList) {
    ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value]) => (
      <div className="c-skill" key={key}>
        <h3>{key}</h3>
        <SkillListRow data={value} />
      </div>
    ));

    return ItemOutputArray;

  } else {
    ItemOutputArray = sectionItemData.content.map((item) => {
      return (
        <div className={`c-item-output is-${itemClassName}`}>
          <div className={`item-headline`}>
            {
              dataType === rules.PROJECTS ? (
                <>
                  <div className="c-project-title">
                    <p className="project-name">{`${item.name}`}</p>
                    <span>{`${item.divider || ''}`}</span>
                  </div>
                  <span>{`${item.desc || ''}`}</span>
                </>) : (<><span className="role">{item.role}</span>
                  <span className="company">{item.name}</span>
                  <span className="date">{item.dateString}</span></>)
            }
          </div>
          {<BulletList bulletArr={item.bullets} />}
        </div>
      );
    });
  }

  return ItemOutputArray;
}

export default generateSectionItemOutput;
