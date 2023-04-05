import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './Header.scss';

const Header = ({ contactData }) => {

/*   if (!contactData?.content) {
    return null;
  } */

/*   const styles = StyleSheet.create({
    wrapper: {
      margin: '0 auto',
      textAlign: 'center',
      maxWidth: '1000px',
      padding: '60px',
    },
    headerEl: {
      marginBottom: '15px'
    },
    cHeader: {
      justifyContent: 'space-between',
      layout: 'horizontal'
    },
    divAddress: {
      textAlign: 'left',
      fontSize: '14px',
      width: '25%'
    },
    address: {
      width: '195px',
      textAlign: 'left',
      fontSize: '0.975rem',
      lineHeight: 1.2
    },
    divName: {
      fontSize: '1.525rem',
      fontWeight: 'bold'
    },
    name: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    divContact: {
      fontSize: '14px',
      lineHeight: 1.2,
      textAlign: 'middle'
    },
    contact: {
      textAlign: 'right',
      fontSize: '0.975rem',
      lineHeight: 1.2,
    }
  }); */

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

  console.log('contact data', contactData);

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

/*   return (
    <View style={styles.cHeader}>
      <View style={styles.divAddress}>
        <Text style={styles.address}>{contactData.content.address}</Text>
      </View>
      <View style={styles.name}>
        <Text>{contactData.content.name}</Text>
      </View>
      <View style={styles.divContact}>
        <Text>{contactData.content.phone}</Text>
        <Text>{contactData.content.email}</Text>
      </View>
    </View>
  ); */

/*   return (
    <section className="c-header">
      <div class="address">
        <p>{contactData.content.address}</p>
      </div>
      <div className="name">
        <h1>{contactData.content.name}</h1>
      </div>
      <div className="contact">
        <p>{contactData.content.phone}</p>
        <p>{contactData.content.email}</p>
      </div>
    </section>
  ); */
};

export default Header;

Header.propTypes = {
  contactData: PropTypes.object,
};
