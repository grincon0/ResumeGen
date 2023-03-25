import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './SectionTitle.scss';

const SectionTitle = ({ titleString, data }) => {
  const { meta } = data;
  const { hasTopBottomBorder } = meta;

  const styles = StyleSheet.create({
    cSectionTitle: {
      fontWeight: 'bold',
      borderBottom: '1px solid #000',
      margin: '0 -5px 10px -5px'
    },
    sectionTitle: {

    },
    topBottomBorder: {}
  })

  return (
    <View className={`c-section-title ${hasTopBottomBorder ? 'top-bottom-border' : ''}`}>
      <Text className="title">{`${titleString}`}</Text>
    </View>
  );
};

SectionTitle.propTypes = {
  titleString: PropTypes.string
}

export default SectionTitle;
