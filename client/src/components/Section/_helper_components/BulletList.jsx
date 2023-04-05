import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import dataTypes from '../../../rules/dataTypes';
import rules from '../../../rules/dataTypes';

const BulletList = ({ bulletArr, dataType, bulletStyles }) => {
  let targetBulletStyles = null;
  const projectBulletIcon = ' - ';
  const defaultBulletIcon = '• ';

  const bulletListStyles = {
    cBulletList: {
      flexDirection: 'column'
    },
    viewBullet: {
      flexDirection: 'row',
    },
    bulletIcon: {
      fontSize: '9px',
      marginRight: '5px'
    },
    bulletListItem: {
      paddingBottom: '7px',
      textAlign: 'left',
      letterSpacing: '0.2px',
      fontSize: '10px',
      '&::before': {
        content: "• ",
        marginRight: '0.5px'
      }
    },
  };

  const projectBulletStyles = {
    cBulletList: {
      textAlign: 'left',
      lineHeight: 1.2
    },
    bulletListItem: {
      '&::before': {
        content: ' - ',
        marginRight: '0.5px'
      },
    }
  }

  const eduBulletStyles = {
    cBulletList: {
      textAlign: 'left'
    }
  };

  if (dataTypes === rules.PROJECTS) {
    targetBulletStyles = StyleSheet.create({ ...bulletListStyles, ...projectBulletStyles });
  } else if (dataTypes === rules.EDUCATION) {
    targetBulletStyles = StyleSheet.create({ ...bulletListStyles, ...eduBulletStyles });
  } else {
    targetBulletStyles = StyleSheet.create({ ...bulletListStyles })
  }


  if (!bulletArr) return null;
  const output = bulletArr.map((bulletData) => {
    return (
      <View style={targetBulletStyles.viewBullet}>
        <Text style={targetBulletStyles.bulletIcon}>{`${dataType === rules.PROJECTS ? `${projectBulletIcon}` : `${defaultBulletIcon}`}`}</Text>
        <Text style={targetBulletStyles.bulletListItem} className="bullet-list-item">{bulletData ? bulletData : ''}</Text>
      </View>
    );
    /*     return (
          <li className="bullet-list-item">{bulletData}</li>
        ); */
  });

  return (
    <View style={targetBulletStyles.cBulletList} className="c-bullet-list">
      {output}
    </View>
  );
};

export default BulletList;
