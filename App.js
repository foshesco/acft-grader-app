import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native';
import Header from './components/Header';
import GetMOS from './components/GetMOS';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="ACFT Calculator" />
      <GetMOS />
      <Footer title="3932 - Group"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height
  },
});