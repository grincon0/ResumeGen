import React from 'react';
import BulletList from '../_helper_components/BulletList';
import SkillListRow from '../_helper_components/SkillListRow';
import rules from '../../../rules/dataTypes';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import '../style.scss';

const generateSectionItemOutput = (sectionItemData = []) => {
  const { dataType } = sectionItemData?.meta;
  const itemClassName = dataType.toLowerCase();
  const isClassicSkillList = dataType === rules.SKILLS;
  let settings = null;
  let ItemOutputArray = [];
  let targetStyles = null;

  const standardStyles = {
    itemHeadline: {
      width: '100%',
      justifyContent: 'space-between',
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    instituteName: {
      fontSize: '11px',
      fontWeight: 'bold',
      marginLeft: 'auto',
      fontFamily: 'Helvetica-Bold',
    },
    roleName: {
      fontSize: '11px',
      fontFamily: 'Helvetica-Bold',
    },
    date: {
      fontSize: '11px',
      marginLeft: 'auto',
      fontFamily: 'Helvetica-Bold',
    },
    rowWrapper: {
      flexDirection: 'row'
    }
  };

  const workItemStyles = {
    cItemOutput: {
      marginBottom: '15px'
    },
    itemHeadline: {
      marginBottom: '3px',
      textAlign: 'left',
      fontSize: '1.1rem'
    },
    fontBold: {
      fontWeight: 'bold'
    }
  };

  const projectItemStyles = {
    cItemOutput: {
      flexDirection: 'column',
      marginBottom: '4px'
    },
    itemHeadline: {
      width: 'auto',
      overflow: 'hidden',
      textAlign: 'left',
      marginBottom: '10px'
    },
    projectWrapper: {
      width: '750px',
      flexDirection: 'row',
      wordWrap: 'break-word',
    },
    cProjectTitle: {
      flexDirection: 'row',
      textAlign: 'center',
      maxWidth: '800px',
    },
    projectTitle: {
      whiteSpace: 'break-spaces',
      fontFamily: 'Helvetica-Bold',
      fontWeight: 'bold',
      fontSize: '10px',
    },
    projectInfo: {
      fontWeight: 100,
      fontSize: '10px',
      lineHeight: 1.1,
      wordWrap: 'break-word',
      width: '400px',
      textAlign: 'left',
      whiteSpace: 'break-spaces',
      fontFamily: 'Helvetica-Oblique',
      fontStyle: 'italics'
    },
    divider: {
      fontSize: '10px',
      transform: 'translateY(1px)',
      fontWeight: 'light',
    }
  };

  const eduItemStyles = {
    cBulletList: {
      textAlign: 'left'
    }
  };

  const workItemTextNotFirstItemStyle = {
    marginLeft: 'auto'
  };

  const skillStyles = StyleSheet.create({
    cSkill: {
      marginBottom: '3px',
      flexDirection: 'row',
      width: '100%'
    },
    skillTitle: {
      fontWeight: 'bold',
      fontSize: '10px',
      textTransform: 'capitalize'
    },
  });


  const contractorTextStyles = StyleSheet.create({
    text: {
      color: '#3b3b3b',
      fontStyle: 'italic',
      marginBottom: '5px',
      fontSize: '9px',
      textAlign: 'left'
    }
  });

  if (dataType === rules.EDUCATION) {
    targetStyles = StyleSheet.create({ ...standardStyles, ...eduItemStyles });
  }

  if (dataType === rules.PROJECTS) {
    targetStyles = StyleSheet.create({ ...standardStyles, ...projectItemStyles });
  }

  if (dataType === rules.WORK) {
    targetStyles = StyleSheet.create({ ...standardStyles, ...workItemStyles });
  }

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
      value.length > 1 ? <View style={skillStyles.cSkill} className="c-skill" key={key}>
        <Text style={skillStyles.skillTitle} className="skill-title">{`${key}: `}</Text>
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
    ItemOutputArray = sectionItemData.content.map((item, index) => {
      const companyString = generateCompanyString(item);
      console.log('companyString', companyString);
      const isLastChild = ((index + 1) == sectionItemData.content.length);
      let lastChildStyle = {};
      console.log('index', index, 'sectionArray.length', sectionItemData.content.length);
      console.log('is this last child of array?', isLastChild, 'item', item);

      if (isLastChild) {
        lastChildStyle = {
          lastEl: {
            marginBottom: 0
          }
        }
      }

      return (
        <View style={targetStyles.cItemOutput, lastChildStyle?.lastEl} className={`c-item-output is-${itemClassName}`}>
          <View style={targetStyles.itemHeadline} className={`item-headline`}>
            {
              dataType === rules.PROJECTS ? (
                <View style={projectItemStyles.projectWrapper}>
                  <View style={projectItemStyles.cProjectTitle} className="c-project-title">
                    <Text style={projectItemStyles.projectTitle} className="project-name">{`${item?.name ? item.name : ''}`}</Text>
                    <Text style={projectItemStyles.divider}>{`${item?.divider ? item.divider : ''}`}</Text>
                    <Text style={projectItemStyles.projectInfo} className="project-desc">{`${item?.desc ? item.desc : ''}`}</Text>
                  </View>
                </View>) : (<View style={targetStyles.rowWrapper}>
                    <Text style={targetStyles.roleName} className={`${dataType === rules.EDUCATION ? 'locale' : 'role'}`}>{`${item?.role ? item.role : item?.locale}`}</Text>
                    <Text style={targetStyles.instituteName} className="company">{`${companyString ? companyString : ''}`}</Text>
                    <Text style={targetStyles.date} className="date">{item?.dateString ? item.dateString : ''}</Text>
                </View>)
            }
          </View>
          {item?.contractor && <Text style={contractorTextStyles.text} className="is-contractor">{`Agency: ${!(item?.setAgencyAsCompanyName) && item?.contractor}`}</Text>}
          {<BulletList dataType={dataType} bulletArr={item.bullets} />}
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
