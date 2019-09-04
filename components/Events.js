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
import Deadlift2 from './events/Deadlift2';

export default class Events extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     dlScoreInput: '',
  //     deadliftScore: {
  //       minMod: {
  //         140: 60,
  //       },
  //       minSig: {
  //         160: 65,
  //       },
  //       minHvy: {
  //         180: 70,
  //       },
  //       maxMod: {
  //         340: 100,
  //       },
  //       scoreSheet: {
  //         339: 99,
  //         340: 100,
  //       },
  //     },
  //   };
  // }

  // getDLScore(e) {
  //   let i;
  //   let deadliftScore = this.state.deadliftScore;

  //   if (deadliftScore.scoreSheet[e]) {
  //     i = deadliftScore.scoreSheet[e];
  //     return i;
  //   }
  // }

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
            <View style={styles.eventContainer}>
              <Deadlift2
                textChange={dlScoreInput => this.setState({ dlScoreInput })}
              />
            </View>
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
    paddingBottom: 15,
  },
  titleName: {
    fontSize: 22,
    justifyContent: 'center',
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
