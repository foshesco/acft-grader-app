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
      <View style={styles.mainScoreContainer}>
        <View style={styles.scoreContainer}>
          <View>
            <Text style={styles.scoreTitle}>TOTAL POINTS:</Text>
          </View>
          <View>
            <Text style={styles.scoreTitle}>GO/NO-GO:</Text>
          </View>
        </View>
        <View style={styles.goContainer}>
          <View>
            <Text style={styles.scoreOutput}>{this.props.dl + this.props.pt}</Text>
          </View>
          <View>
            <Text style={styles.scoreOutput}>{this.getTotalScore}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.scoreButton}>
            <Text> Clear </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreTitle: {
    fontSize: 22,
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black',
    textAlignVertical: 'center',
  },
  scoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    height: '40%',
    width: '60%',
  },
  scoreOutput: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    marginBottom: 10,
    width: 80,
    height: 45,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  mainScoreContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20
  },
  scoreContainer: {
    width: '50%'
  },
  goContainer: {
    width: '30%'
  },
  buttonContainer: {
    width: '30%',
    paddingTop: '7%'
  },
});
