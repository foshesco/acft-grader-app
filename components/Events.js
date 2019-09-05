import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Deadlift from './events/Deadlift';
import PowerThrow from './events/PowerThrow';

export default class Events extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
          <View>
            <View style={styles.title}>
              <Text style={styles.titleName}>Events</Text>
              <Text style={styles.titleName}>Raw Score</Text>
              <Text style={styles.titleName}>Points</Text>
            </View>
          </View>

          <View>
            <Deadlift />
          </View>

          <View>
            <PowerThrow />
          </View>

        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 4,
    padding: 10,
  },
  title: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 40,
  },
  titleName: {
    fontSize: 22,
    justifyContent: 'center',
    textDecorationLine: 'underline'
  },
});
