import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import GetMOS from '../GetMOS';

export default class Deadlift extends Component {
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

    console.log("2", this.state.mosInput)

    if (deadliftScore.scoreSheet[e]) {
      i = deadliftScore.scoreSheet[e];
      if ((this.state.mosInput) == "MODERATE") {
        return i;
      }
      return i;
    }
  }

  render() {
    return (
      <View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventName}>Deadlift</Text>
          <Deadlift2 textChange={dlScoreInput => this.setState({ dlScoreInput })} />
          <View>
            <Text style={styles.output}>
              {this.getDLScore(this.state.dlScoreInput)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const Deadlift2 = props => {
  return (
    <View>
      <TextInput
        style={styles.input}
        maxLength={3}
        autoCorrect={false}
        onChangeText={dlScoreInput => props.textChange(dlScoreInput)}
        value={props.dlScoreInput}
        onKeyPress={props.getDLScore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventName: {
    fontSize: 15,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  output: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  eventContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});
