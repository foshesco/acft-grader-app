import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import GetMOS from './components/GetMOS';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myView}>
        <GetMOS />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb'
  },
});
