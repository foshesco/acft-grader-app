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
    backgroundColor: 'green',
    textAlign: 'center',
    alignSelf: 'center',
    bottom: 0,
    position: 'absolute',
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Header;
