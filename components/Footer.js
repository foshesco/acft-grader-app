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
    backgroundColor: 'green',
    flex: 1,
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
