import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { styles } from './Styles';

export default class LegTuck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ltScoreInput: '',
      legTuckScore: {
        scoreSheet: {
          13.1: 98,
          13.2: 99,
          13.3: 99,
          13.4: 99,
          13.5: 100,
        },
      },
    };
  }

  getLTScore(e) {
    let i;
    let legTuckScore = this.state.legTuckScore;

    i = legTuckScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 5) {
          return 'fail';
        } else if (e >= 20) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 3) {
          return 'fail';
        } else if (e >= 20) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 1) {
          return 'fail';
        } else if (e >= 20) {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  render() {
    const { onLTHandler } = this.props;

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <Text style={styles.eventName}>LEG TUCK</Text>
          </View>
          <View styles={styles.child2}>
            <View>
              <TextInput
                {...this.props}
                style={styles.input}
                keyboardType="decimal-pad"
                autoCorrect={false}
                maxLength={3}
                onChange={event => {
                  onLTHandler(
                    event.nativeEvent.text,
                    this.getLTScore(event.nativeEvent.text)
                  );
                }}
                value={this.props.ltScoreInput}
              />
            </View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.output}>{this.props.ltScore}</Text>
          </View>
        </View>
      </View>
    );
  }
}
