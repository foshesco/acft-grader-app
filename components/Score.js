import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';

export default class Deadlift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalScore: '',
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
          1: 0,
          21: 5,
          339: 99,
          340: 100,
        },
      },
    };
  }

  getDLScore(e) {
    let i;
    let deadliftScore = this.state.deadliftScore;

    i = deadliftScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e <= 180) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e <= 160) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e <= 140) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  render() {
    return (
      <View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventName}>TOTAL POINTS</Text>
          <Text style={styles.output}>{this.getTotalScore}</Text>
          <Button title="Clear" color="white" style={styles.clearButton} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventName: {
    fontSize: 15,
    color: 'white',
  },
  output: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  eventContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
    textAlignVertical: 'center',
    alignContent: 'center',
  },
});
