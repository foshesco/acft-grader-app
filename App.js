import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import Header from './components/Header';
import GetMOS from './components/GetMOS';
import Score from './components/Score';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.myView}>
        <Header title="ACFT Calculator" />
        <GetMOS />
        <Score />
        <Footer title="3932 - Group" />
      </View>
    </View>
  );
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  myView: {
    height: height,
    width: width,
  },
});
