import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

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
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e <= 140) {
          return 'fail';
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '1' || this.props.mosLevel === '2' || this.props.mosLevel === '3') {
        if (e >= 340) {
          return '100';
        }
      }
    }
  }

  render() {
    return (
      <View>
        <View style={styles.eventContainer}>
          <Text style={styles.eventName}>Deadlift lvl - {this.props.mosLevel}</Text>
          <Deadlift2
            textChange={dlScoreInput => this.setState({ dlScoreInput })}
          />
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
        keyboardType='number-pad'
        autoCorrect={false}
        maxLength={3}
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
