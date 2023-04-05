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
  console.log('isClassic skill list', isClassicSkillList, 'dataType', dataType, sectionItemData);
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
      transform: 'translateY(-1px)',
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
      fontSize: '11px',
      fontFamily: 'Helvetica-Bold',
      textTransform: 'capitalize'
    },
    skillRow: {
      marginLeft: '5px',
      whiteSpace: 'break-spaces',
      flexDirection: 'row',
      fontSize: '10px',
      marginTop: '2px',
      textAlign: 'left',
      width: 'auto',
      maxWidth: '550px'
    },
    text: {
      position: 'relative'
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
      position:'relative',
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
    console.log('isClassicSkillList AHHHHHHHHHHHHH', isClassicSkillList, sectionItemData.categories);
    ItemOutputArray = Object.entries(sectionItemData.categories).map(([key, value], i) => {

      return (value.length > 1 ? <View style={skillStyles.cSkill} key={key}>
        <Text style={skillStyles.skillTitle} className="skill-title">{key ? `${key} : ` : ''}</Text>
        <View style={skillStyles.skillRow}>
          <Text style={skillStyles.text}>{value ? value : ''}</Text>
        </View>
      </View> : '');
    }
    );

    console.log('item out for skills', ItemOutputArray);

    return ItemOutputArray;

  } else {
    ItemOutputArray = sectionItemData.content.map((item, index) => {
      const companyString = generateCompanyString(item);
      const agencyString = generateCompanyString(item, true);

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
          {(item?.isContract && agencyString) ? <Text style={contractorTextStyles.text} className="is-contractor">{`Agency: ${agencyString}`}</Text> : ''}
          {<BulletList dataType={dataType} bulletArr={item.bullets} />}
        </View>
      );
    });
  }

  return ItemOutputArray;
}

export default generateSectionItemOutput;
