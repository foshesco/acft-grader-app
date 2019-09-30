import React, { Component, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles';

export default class Deadlift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dlScoreInput: '',
      dlPoints: 0,
      deadliftScore: {
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
        if (e < 180) {
          return <Text style={styles.failed}>fail</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 160) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 140) {
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
    const { onDLHandler } = this.props;

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <Text style={styles.titleName}>Events</Text>
            <Text style={styles.eventName}>DEADLIFT</Text>
          </View>
          <View styles={styles.child2}>
            <Text style={styles.titleName}>Raw</Text>
            <View>
              <TextInput
                {...this.props}
                style={styles.input}
                keyboardType="number-pad"
                autoCorrect={false}
                maxLength={3}
                onChange={event => {
                  onDLHandler(
                    event.nativeEvent.text,
                    this.getDLScore(event.nativeEvent.text)
                  );
                }}
                value={this.props.dlScoreInput}
              />
            </View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.titleName}>Points</Text>
            <Text style={styles.output}>{this.props.dlScore}</Text>
          </View>
        </View>
      </View>
    );
  }
}
