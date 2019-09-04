import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MOSInput from './MOSInput';

export default class GetMOS extends Component {
  constructor() {
    super();

    this.state = {
      mosInput: '',
      mosDesc: {
        '11A': '1Infantry',
        '37F': '3PSYOP',
        '42A': '3Secretary',
      },
    };
  }

  getMOSInfo(e) {
    let i;
    let mosDesc = this.state.mosDesc;

    if (mosDesc[e]) {
      i = mosDesc[e].substring(1, 100);
      return i;
    }
  }

  getLevel(e) {
    if (e.length < 3) {
      return null;
    } else if (e.charAt(0) != 1 && e.charAt(0) != 2 && e.charAt(0) != 3) {
      return null;
    } else if (e.charAt(0) == 1) {
      return 'HEAVY';
    } else if (e.charAt(0) == 2) {
      return 'SIGNIFICANT';
    } else if (e.charAt(0) == 3) {
      return 'MODERATE';
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <MOSInput textChange={mosInput => this.setState({ mosInput })} />
        <View style={styles.mosOutput}>
          <Text>{this.getMOSInfo(this.state.mosInput)}</Text>
          <Text>{this.getLevel(this.state.mosInput)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  mosOutput: {
    paddingBottom: 20,
    paddingTop: 5,
  },
});
