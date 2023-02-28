import React from 'react';
import BulletList from '../_helper_components/BulletList';
import SkillList from '../_helper_components/SkillList';
import SkillListRow from '../_helper_components/SkillListRow';
import rules from '../../../rules/dataTypes';

const generateSectionItemOutput = (sectionItemData = [], type) => {
  console.log('section item data to be mapped', sectionItemData);
  const { dataType, layoutType = '' } = sectionItemData?.meta;
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
    /*     for (const category in sectionItemData.categories) {
          console.log('category', sectionItemData.categories[category]);
          ItemOutputArray.push(<SkillListRow data={sectionItemData.categories[category]} />);
    
          
        } */


    ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value]) => (
      <div key={key}>
        <h3>{key}</h3>
        <SkillListRow data={value} />
      </div>
    ));
    /*     return (Object.entries(sectionItemData.categories).map(([key, value]) => (
          <div key={key}>
            <h3>{key}</h3>
            <SkillListRow data={value} />
          </div>
        )))
     */

    console.log('itemOutputArray', ItemOutputArray);

    return ItemOutputArray;
    // return <SkillList settings={settings} />
  } else {
    ItemOutputArray = sectionItemData.content.map((item) => {
      return (
        <div className="c-item-output">
          <div className="item-headline">
            <span className="role">{item.role}</span>
            <span className="company">{item.name}</span>
            <span className="date">{item.dateString}</span>
          </div>
          {/*         {
            dataType === rules.SKILLS ? <BulletList bulletArr={item.bullets} dataType={dataType} />: <BulletList bulletArr={item.bullets} />
          } */}
          {<BulletList bulletArr={item.bullets} />}
        </div>
      );
    });
  }

  return ItemOutputArray;
}

export default generateSectionItemOutput;
