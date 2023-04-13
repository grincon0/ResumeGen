import React from 'react';
import PropTypes from 'prop-types';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';

const Header = ({ contactData }) => {
  const styles = StyleSheet.create({
    cHeader: {
      flexDirection: 'row',
      marginTop: '20px',
      marginBottom: '15px',
    },
    viewAddress: {
      flex: 1,
      fontSize: '10px',
      width: '70px',
      textAlign: 'left',
      flexDirection: 'column'
    },
    address: {
      width: '130px'
    },
    linkedinUrl: {
      width: 'auto',
      maxWidth: '200px'
    },
    viewName: {
      flex: '1',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    name: {
      fontFamily: 'Helvetica-Bold',
    },
    title: {
      fontSize: '12px',
      fontFamily: 'Helvetica-Oblique'
    },
    viewContact: {
      flex: 1,
      textAlign: 'right',
      fontSize: '10px',
      width: '120px',
    }
  });

  return (
    <View style={styles.cHeader}>
      <View style={styles.viewAddress}>
        <Text style={styles.address}>{contactData.content.address}</Text>
        <Link style={styles.linkedinUrl} src={contactData.content.linkedinUrl}>Linkedin</Link>
      </View>
      <View style={styles.viewName}>
        <Text style={styles.name}>{contactData.content.name}</Text>
        <Text style={styles.title}>{contactData.content.title}</Text>
      </View>
      <View style={styles.viewContact}>
        <Text>{contactData.content.phone}</Text>
        <Text>{contactData.content.email}</Text>
      </View>
    </View>
  );
};

export default Header;

Header.propTypes = {
  contactData: PropTypes.object,
};
