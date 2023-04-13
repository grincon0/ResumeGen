import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import dataTypes from '../../../rules/dataTypes';
import rules from '../../../rules/dataTypes';

const BulletList = ({ bulletArr }) => {
  let targetBulletStyles = null;
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
      fontSize: '10px'
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
        <Text style={targetBulletStyles.bulletIcon}>{defaultBulletIcon}</Text>
        <Text style={targetBulletStyles.bulletListItem}>{bulletData ? bulletData : ''}</Text>
      </View>
    );
  });

  return (
    <View style={targetBulletStyles.cBulletList}>
      {output}
    </View>
  );
};

export default BulletList;
