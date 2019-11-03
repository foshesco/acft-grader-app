import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Footer;
