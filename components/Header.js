import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
 
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
  },
  headerTitle: {
    color: 'white',
    fontSize: hp('1.8%'),
    fontWeight: '500',
  },
});

export default Header;
