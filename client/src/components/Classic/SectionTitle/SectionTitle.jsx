import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const SectionTitle = ({ titleString, data }) => {
  const { meta } = data;
  const { hasTopBottomBorder } = meta;

  let styles = {
    cSectionTitle: {
      fontWeight: 'bold',
      color: '#000',
      borderBottom: '1px solid #000',
      margin: '0 -5px 5px -5px'
    },
    sectionTitle: {
      textAlign: 'left',
      marginBottom: '5px',
      fontSize: '10px',
      marginLeft: '4px',
      fontWeight: 'bold',
      fontFamily: 'Helvetica-Bold',
      lineHeight: '0.7'
    },
  };

  const topBottomBorderStyle = {
    borderTop: '1px solid black',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '2px 0',
    fontFamily: 'Helvetica-Bold',
  };

  const titleMarginStyles = {
    margin: '4px 0'
  };

  if (hasTopBottomBorder) {
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

  return (
    <View style={sectionTitleStyles.cSectionTitle}>
      <Text style={sectionTitleStyles.sectionTitle}>{`${titleString}`}</Text>
    </View>
  );
};

SectionTitle.propTypes = {
  titleString: PropTypes.string
}

export default SectionTitle;
