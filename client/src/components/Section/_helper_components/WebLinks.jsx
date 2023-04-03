import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';

const WebLinks = ({ linkData }) => {

  console.log('linkData', linkData);
  const styles = StyleSheet.create({
    viewLinks: {
      flexDirection: 'row'
    },
    text: {
      fontSize: '10px',
      fontFamily: 'Helvetica-Oblique',
      textAlign: 'left',
      lineHeight: 1.3
    },
    key: {
      fontFamily: 'Helvetica-Bold',
    },
  });

  return (
    <>
      {linkData.repo ? <Text style={styles.text}><Text style={styles.key}>Github: </Text>{`${linkData.repo}`}</Text> : ''}
      {linkData.portfolio ? <Text style={styles.text}><Text style={styles.key}>Portfolio: </Text>{`${linkData.portfolio}`}</Text> : ''}
    </>
  )
};

export default WebLinks;