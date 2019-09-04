import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default class Deadlift2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dlScoreInput: '',
      deadliftScore: {
        minMod: {
          140: 60,
        },
        minSig: {
          160: 65,
        },
        minHvy: {
          180: 70,
        },
        maxMod: {
          340: 100,
        },
        scoreSheet: {
          339: 99,
          340: 100,
        },
      },
    };
  }

  getDLScore(e) {
    let i;
    let deadliftScore = this.state.deadliftScore;

    if (deadliftScore.scoreSheet[e]) {
      i = deadliftScore.scoreSheet[e];
      return i;
    }
  }

  render() {
    return (
      <View>
        <Text style={styles.eventName}>Deadlift</Text>
        <TextInput
          style={styles.input}
          maxLength={3}
          autoCorrect={false}
          onChangeText={dlScoreInput => this.props.textChange(dlScoreInput)}
          value={this.props.dlScoreInput}
          onKeyPress={this.props.getDLScore}
        />
        <View>
          <Text style={styles.output}>
            {this.getDLScore(this.state.dlScoreInput)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  eventName: {
    fontSize: 24,
  },
});
