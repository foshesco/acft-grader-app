import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import GetMOS from './components/GetMOS';
import { SplashScreen } from 'expo';

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
