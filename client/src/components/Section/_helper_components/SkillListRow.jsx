import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const SkillListRow = ({ data }) => {

  const styles = StyleSheet.create({
    skillRow: {
      marginLeft: '5px',
      whiteSpace: 'break-spaces',
      flexDirection: 'row',
      fontSize: '8px',
      marginTop: '2px',
      textAlign: 'center'
    },
    text: {
      position: 'relative'
    }
  });

  return (
    <View style={styles.skillRow} className="skill-row">
      {
        data.map((skill, i) => {
          const isLastItem = i === data.length - 1;
          return <Text key={i}>{`${skill}${isLastItem ? '' : ', '}`}</Text>;
        })
      }
    </View>
  )

/*   return (
    <ul className="skill-row">
      {
        data.map((skill, i) => {
          console.log('skill', skill);
          const isLastItem = i === data.length - 1;
          return <li key={i}>{`${skill}${isLastItem ? '' : ', '}`}</li>;
        })
      }
    </ul>
  ) */


};

export default SkillListRow;
