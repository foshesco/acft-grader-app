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
      goNoGo: '',
    };
  }

  goNoGo() {
    this.setState({ goNoGo: '' }, () => { });
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
            <Text style={styles.scoreOutput}>{this.props.totalScore}</Text>
          </View>
          <View>
            <Text style={styles.scoreOutput}>
              {this.props.goNoGo(this.props.mosLevel)}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.scoreButton}
            onPress={() => this.props.clearState()}>
            <Text>Clear</Text>
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
    padding: 20,
  },
  scoreContainer: {
    width: '50%',
  },
  goContainer: {
    width: '30%',
  },
  buttonContainer: {
    width: '30%',
    paddingTop: '7%',
  },
});
