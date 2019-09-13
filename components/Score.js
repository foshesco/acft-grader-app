import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

export default class Score extends Component {
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
      <View >
        <View style={styles.eventContainer}>
          <View>
            <Text style={styles.eventName}>TOTAL POINTS:</Text>
          </View>
          <View>
            <Text style={styles.output}>{this.getTotalScore}</Text>
          </View>
          <View style={{ paddingTop: '1%' }}>
            <TouchableOpacity style={styles.button}>
              <Text> Clear </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  eventName: {
    fontSize: 22,
    paddingTop: 10,
    color: 'black',
    textAlignVertical: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  output: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: 80,
    height: 45,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  eventContainer: {
    borderTopColor: 'black',
    borderTopWidth: 1.5,
    flexDirection: 'row',
    backgroundColor: '#E8E8E8',
    width: '100%',
    justifyContent: 'space-between',
    padding: '6%',
    paddingHorizontal: 15,
    textAlignVertical: 'center',
    alignContent: 'center',
  },
});
