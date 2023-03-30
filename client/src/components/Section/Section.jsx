import React from 'react';
import SectionTitle from '../Classic/SectionTitle/SectionTitle';
import SectionItemOutput from './_helper_components/SectionItemOutput';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './style.scss';

const Section = ({ title = '', data, dataType = '' }) => {
  const settings = { dataType };

  const styles = StyleSheet.create({
    cSection: {
      marginBottom: '15px',
    }
  });

  return (
    <View style={styles.cSection} className="c-section">
      {title && <SectionTitle titleString={title} data={data} />}
      <SectionItemOutput sectionItemData={data} settings={settings} />
    </View>
  );
}

export default Section;
