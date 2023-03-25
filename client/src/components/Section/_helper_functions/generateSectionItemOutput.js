import React from 'react';
import BulletList from '../_helper_components/BulletList';
import SkillListRow from '../_helper_components/SkillListRow';
import rules from '../../../rules/dataTypes';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import '../style.scss';

const generateSectionItemOutput = (sectionItemData = []) => {
  const { dataType } = sectionItemData?.meta;
  const itemClassName = dataType.toLowerCase();
  const isClassicSkillList = dataType === rules.SKILLS;
  let settings = null;
  let ItemOutputArray = [];

  if (!sectionItemData?.content) return null;
  if (isClassicSkillList) settings = {
    isMulti: true,
    isUniform: false,
    data: sectionItemData
  }

  const generateCompanyString = (iterable) => {
    let string = iterable?.setAgencyAsCompanyName && iterable?.contractor ? iterable.contractor : '';

    if (!string) string = iterable?.name || '';

    return string;
  };

  if (isClassicSkillList) {
    ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value]) => (
      value.length > 1 ? <View className="c-skill" key={key}>
        <Text className="skill-title">{`${key}: `}</Text>
        <SkillListRow data={value} />
      </View> : ''
    ));

/*     ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value]) => (
      value.length > 1 ? <div className="c-skill" key={key}>
        <h3 className="skill-title">{`${key}: `}</h3>
        <SkillListRow data={value} />
      </div> : ''
    )); */

    return ItemOutputArray;

  } else {

    ItemOutputArray = sectionItemData.content.map((item) => {
      const companyString = generateCompanyString(item);
      
      return (
        <View className={`c-item-output is-${itemClassName}`}>
          <View className={`item-headline`}>
            {
              dataType === rules.PROJECTS ? (
                <>
                  <View className="c-project-title">
                    <Text className="project-name">{`${item?.name}`}</Text>
                    <Text>{`${item?.divider || ''}`}</Text>
                  </View>
                  <Text className="project-desc">{`${item?.desc || ''}`}</Text>
                </>) : (<>
                  <Text className={`${dataType === rules.EDUCATION ? 'locale' : 'role'}`}>{`${item?.role || item?.locale}`}</Text>
                  <Text className="company">{`${companyString}`}</Text>
                  <Text className="date">{item?.dateString}</Text>
                </>)
            }
          </View>
          {item?.contractor && <Text className="is-contractor">{`Contractor: ${!(item?.setAgencyAsCompanyName) && item?.contractor}`}</Text>}
          {<BulletList bulletArr={item.bullets} />}
        </View>
      );
    });

/*     ItemOutputArray = sectionItemData.content.map((item) => {
      return (
        <div className={`c-item-output is-${itemClassName}`}>
          <div className={`item-headline`}>
            {
              dataType === rules.PROJECTS ? (
                <>
                  <div className="c-project-title">
                    <p className="project-name">{`${item?.name}`}</p>
                    <span>{`${item?.divider || ''}`}</span>
                  </div>
                  <span className="project-desc">{`${item?.desc || ''}`}</span>
                </>) : (<>
                  <span className={`${dataType === rules.EDUCATION ? 'locale' : 'role'}`}>{`${item?.role || item?.locale}`}</span>
                  <span className="company">{(item?.setAgencyAsCompanyName && item?.contractor) || item?.name}</span>
                  <span className="date">{item?.dateString}</span>
                </>)
            }
          </div>
          {item?.contractor && <span className="is-contractor">{`Contractor: ${!(item?.setAgencyAsCompanyName) && item?.contractor}`}</span>}
          {<BulletList bulletArr={item.bullets} />}
        </div>
      );
    }); */
  }

  return ItemOutputArray;
}

export default generateSectionItemOutput;
