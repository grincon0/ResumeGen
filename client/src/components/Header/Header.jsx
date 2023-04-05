import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

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
      textAlign: 'left'
    },
    address: {
      width: '130px'
    },
    viewName: {
      flex: '1',
      textAlign:'center',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 'bold',
    },
    name : {
      fontFamily: 'Helvetica-Bold',
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
      </View>
      <View style={styles.viewName}>
        <Text style={styles.name} >{contactData.content.name}</Text>
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
