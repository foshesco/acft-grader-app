import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = props => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 20,
    paddingTop: 20,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerTitle: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 45,
  },
});

export default Footer;
