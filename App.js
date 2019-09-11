import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Header from './components/Header';
import GetMOS from './components/GetMOS';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="ACFT Calculator" />
      <GetMOS />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});