import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const BulletList = ({ bulletArr }) => {
  if (!bulletArr) return null;
  const output = bulletArr.map((bulletData) => {
    return (
      <Text className="bullet-list-item">{bulletData}</Text>
    );
/*     return (
      <li className="bullet-list-item">{bulletData}</li>
    ); */
  });

  return (
    <View className="c-bullet-list">
      {output}
    </View>
  );
};

export default BulletList;
