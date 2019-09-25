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

export default class PowerThrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ptScoreInput: '',
      powerThrowScore: {
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

  getPTScore(e) {
    let i;
    let powerThrowScore = this.state.powerThrowScore;

    i = powerThrowScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 8.5) {
          return 'fail';
        } else if (e >= 13.5) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 6.6) {
          return 'fail';
        } else if (e >= 13.5) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 4.6) {
          return 'fail';
        } else if (e >= 13.5) {
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
          <View styles={styles.child1}>
            <Text style={styles.eventName}>POWER THROW</Text>
          </View>
          <View styles={styles.child2}>
            <View>
              <TextInput
                onChangeText={ptScoreInput => this.setState({ ptScoreInput })}
                style={styles.input}
                keyboardType="decimal-pad"
                maxLength={4}
                autoCorrect={false}
                value={this.state.ptScoreInput}
                onChange={() => {
                  this.props.handler(this.getPTScore(this.state.ptScoreInput));
                }}
              />
            </View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.output}>
              {this.getPTScore(this.state.ptScoreInput)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}