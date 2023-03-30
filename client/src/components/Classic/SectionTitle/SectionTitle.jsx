import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './SectionTitle.scss';

const SectionTitle = ({ titleString, data }) => {
  const { meta } = data;
  const { hasTopBottomBorder } = meta;

  let styles = {
    cSectionTitle: {
      fontWeight: 'bold',
      borderBottom: '1px solid #000',
      margin: '0 -5px 10px -5px'
    },
    sectionTitle: {
      textAlign: 'left',
      marginBottom: '5px',
      fontSize: '9px',
      marginLeft: '4px',
      fontWeight: 'bold'
    },
  };

  const topBottomBorderStyle = {
    borderTop: '1px solid black',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '2px 0'
  };

  const titleMarginStyles = {
    margin: '4px 0'
  };

  if (hasTopBottomBorder) {
    console.log('hasTopBottomBorder', hasTopBottomBorder);
    styles.cSectionTitle = {
      ...styles.cSectionTitle,
      ...topBottomBorderStyle
    };

    styles.sectionTitle = {
      ...styles.cSectionTitle,
      ...titleMarginStyles
    };
  }


  const sectionTitleStyles = StyleSheet.create({
    ...styles,
  });

  console.log('sectiontitleStyles obj', sectionTitleStyles);


console.log('titlestring', titleString);
  return (
    <View style={sectionTitleStyles.cSectionTitle} className={`c-section-title ${hasTopBottomBorder ? 'top-bottom-border' : ''}`}>
      <Text style={sectionTitleStyles.sectionTitle} className="title">{`${titleString}`}</Text>
    </View>
  );
};

SectionTitle.propTypes = {
  titleString: PropTypes.string
}

export default SectionTitle;
