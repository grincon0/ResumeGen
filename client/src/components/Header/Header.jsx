import React from 'react';
import PropTypes from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './Header.scss';

const Header = ({ contactData }) => {

  if (!contactData?.content) {
    return null;
  }

  return (
    <View className="c-header">
      <View class="address">
        <Text>{contactData.content.address}</Text>
      </View>
      <View className="name">
        <Text>{contactData.content.name}</Text>
      </View>
      <View className="contact">
        <Text>{contactData.content.phone}</Text>
        <Text>{contactData.content.email}</Text>
      </View>
    </View>
  );

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
