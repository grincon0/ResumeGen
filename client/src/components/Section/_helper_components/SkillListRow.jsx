import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const SkillListRow = ({ data }) => {
  console.log('skill list row data', data);

  return (
    <View className="skill-row">
      {
        data.map((skill, i) => {
          console.log('skill', skill);
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
