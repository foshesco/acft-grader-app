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
import StatusBar from './components/StatusBar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myView}>
       <StatusBar backgroundColor="#2EBD6B" barStyle="light-content" />
        <GetMOS />
      </View>
    </View>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myView: {
    height: height,
    width: width,
  },
});
