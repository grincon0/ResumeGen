import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

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
    <View style={styles.skillRow}>
      {
        data.map((skill, i) => {
          const isLastItem = i === data.length - 1;
          return <Text key={i}>{`${skill}${isLastItem ? '' : ', '}`}</Text>;
        })
      }
    </View>
  )
};

export default SkillListRow;
