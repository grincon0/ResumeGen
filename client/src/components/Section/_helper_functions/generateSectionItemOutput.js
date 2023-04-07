import React from 'react';
import BulletList from '../_helper_components/BulletList';
import rules from '../../../rules/dataTypes';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import '../style.scss';

const generateSectionItemOutput = (sectionItemData = []) => {
  const { dataType } = sectionItemData?.meta;
  const itemClassName = dataType.toLowerCase();
  const isClassicSkillList = dataType === rules.SKILLS;
  let ItemOutputArray = [];
  let targetStyles = null;
  let settings = null;

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
      width: 'auto',
    },
    date: {
      fontSize: '11px',
      marginLeft: 'auto',
      fontFamily: 'Helvetica-Bold',
    },
    rowWrapper: {
      flexDirection: 'row',
      marginBottom: '5px'
    }
  };

  const workItemStyles = {
    cItemOutput: {
      marginBottom: '12px'
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
      transform: 'translateY(-1px)',
      fontWeight: 'light',
    }
  };

  const eduItemStyles = {
    cBulletList: {
      textAlign: 'left'
    }
  };

  const skillStyles = StyleSheet.create({
    cSkill: {
      marginBottom: '3px',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%'
    },
    skillTitle: {
      flex: 0,
      fontSize: '10px',
      fontFamily: 'Helvetica-Bold',
      textTransform: 'capitalize'
    },
    text: {
      flex: 1,
      position: 'relative',
      fontSize: '9px',
      textAlign: 'left',
      whiteSpace: 'break-spaces',
      marginLeft: '5px',
    }
  });


  const contractorTextStyles = StyleSheet.create({
    text: {
      color: '#3b3b3b',
      fontStyle: 'italic',
      marginBottom: '5px',
      fontSize: '9px',
      textAlign: 'left',
      fontFamily: 'Helvetica-Oblique',
      position: 'relative',
      top: '-2px'
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

  if (!sectionItemData?.content && !sectionItemData?.categories) return null;

  if (isClassicSkillList) settings = {
    isMulti: true,
    isUniform: false,
    data: sectionItemData
  }

  const generateCompanyString = (iterable, forSubText = false) => {
    let string = (!forSubText && iterable?.setAgencyAsCompanyName && iterable?.contractor) ? iterable.contractor : '';
    if (forSubText && !string && !(iterable?.setAgencyAsCompanyName) && iterable?.contractor) string = iterable.contractor;
    if (!string) string = iterable?.name || '';

    return string;
  };

  if (isClassicSkillList) {
    ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value], i) => {

      return (value.length > 1 ? <View style={skillStyles.cSkill} key={key}>
        <View>
          <Text style={skillStyles.skillTitle} className="skill-title">{key ? `${key}: ` : ''}</Text>
        </View>
        <Text style={skillStyles.text}>{value ? value : ''}</Text>
      </View> : '');
    });

    return ItemOutputArray;

  } else {
    ItemOutputArray = sectionItemData.content.map((item, index) => {
      const companyString = generateCompanyString(item);
      const agencyString = generateCompanyString(item, true);

      const isLastChild = ((index + 1) == sectionItemData.content.length);
      let lastChildStyle = {};

      if (isLastChild) {
        lastChildStyle = {
          lastEl: {
            marginBottom: 0
          }
        }
      }

      return (
        <View style={targetStyles.cItemOutput, lastChildStyle?.lastEl}>
          <View style={targetStyles.itemHeadline}>
            {
              dataType === rules.PROJECTS ? (
                <View style={projectItemStyles.projectWrapper}>
                  <View style={projectItemStyles.cProjectTitle}>
                    <Text style={projectItemStyles.projectTitle}>{`${item?.name ? item.name : ''}`}</Text>
                    <Text style={projectItemStyles.divider}>{`${item?.divider ? item.divider : ''}`}</Text>
                    <Text style={projectItemStyles.projectInfo}>{`${item?.desc ? item.desc : ''}`}</Text>
                  </View>
                </View>) : (<View style={targetStyles.rowWrapper}>
                  <Text style={targetStyles.roleName} className={`${dataType === rules.EDUCATION ? 'locale' : 'role'}`}>{`${item?.role ? item.role : item?.locale}`}</Text>
                  <Text style={targetStyles.instituteName}>{`${companyString ? companyString : ''}`}</Text>
                  <Text style={targetStyles.date}>{item?.dateString ? item.dateString : ''}</Text>
                </View>)
            }
          </View>
          {(item?.isContract && agencyString) ? <Text style={contractorTextStyles.text} className="is-contractor">{`Agency: ${agencyString}`}</Text> : ''}
          {<BulletList dataType={dataType} bulletArr={item.bullets} />}
        </View>
      );
    });
  }

  return ItemOutputArray;
}

export default generateSectionItemOutput;
