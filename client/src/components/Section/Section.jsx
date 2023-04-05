import React from 'react';
import SectionTitle from '../Classic/SectionTitle/SectionTitle';
import SectionItemOutput from './_helper_components/SectionItemOutput';
import { View, StyleSheet } from '@react-pdf/renderer';

const Section = ({ title = '', data, dataType = '' }) => {
  const settings = { dataType };

  const styles = StyleSheet.create({
    cSection: {
      marginBottom: '15px',
    }
  });

  return (
    <View style={styles.cSection}>
      {title && <SectionTitle titleString={title} data={data} />}
      <SectionItemOutput sectionItemData={data} settings={settings} />
    </View>
  );
}

export default Section;
