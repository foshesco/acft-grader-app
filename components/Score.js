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
      goNoGo: 'GO',
      totalScore: '',
    };
  }

  calcScore() {
    e = this.props.mosLevel

    var totalScore =
      Number(this.props.dlScore) +
      Number(this.props.ptScore) +
      Number(this.props.puScore) +
      Number(this.props.sdcScore) +
      Number(this.props.ltScore) +
      Number(this.props.runScore)

    if (e == 1 || e == 2 || e == 3) {
      if (isNaN(totalScore)) {
        return totalScore = 'fail';
      } else {
        return totalScore
      }
    }
  };

  goNoGo = e => {
    if (e == 1 || e == 2 || e == 3) {
      var scoresAboveZero =
        this.props.dlScore > 0 &&
        this.props.ptScore > 0 &&
        this.props.puScore > 0 &&
        this.props.sdcScore > 0 &&
        this.props.ltScore > 0 &&
        this.props.runScore > 0;

      var scoresUndefined =
        this.props.dlScore == undefined ||
        this.props.ptScore == undefined ||
        this.props.puScore == undefined ||
        this.props.sdcScore == undefined ||
        this.props.ltScore == undefined ||
        this.props.runScore == undefined;

      var scoresEqualFail =
        this.props.dlScore == "fail" ||
        this.props.ptScore == "fail" ||
        this.props.puScore == "fail" ||
        this.props.sdcScore == "fail" ||
        this.props.ltScore == "fail" ||
        this.props.runScore == "fail";

      var scoresNotEntered =
        this.props.dlScore == "" ||
        this.props.ptScore == "" ||
        this.props.puScore == "" ||
        this.props.sdcScore == "" ||
        this.props.ltScore == "" ||
        this.props.runScore == "";

      if (scoresAboveZero) {
        if (e == 1 && this.totalScore < 420) {
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'red',
                width: '100%',
                textAlign: 'center',
              }}>
              NO-GO
            </Text>
          );
        } else if (e == 2 && this.totalScore < 390) {
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'red',
                width: '100%',
                textAlign: 'center',
              }}>
              NO-GO
            </Text>
          );
        } else if (e == 3 && this.totalScore < 360) {
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'red',
                width: '100%',
                textAlign: 'center',
              }}>
              NO-GO
            </Text>
          );
        } else {
          return (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '500',
                backgroundColor: 'green',
                width: '100%',
                textAlign: 'center',
              }}>
              GO
            </Text>
          );
        }
      } else if (scoresEqualFail || scoresUndefined) {
        return (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              backgroundColor: 'red',
              width: '100%',
              textAlign: 'center',
            }}>
            NO-GO
          </Text>
        );
      } else if (scoresNotEntered) {
        return (
          <Text
            style={{
              color: 'black',
              flexWrap: 'wrap',
              fontSize: 12,
              fontWeight: '500',
              width: '100%',
              textAlign: 'center',
            }}>
            Enter All Scores
          </Text>
        );
      }
    };
  }

  render() {
    return (
      <View>
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
              <Text style={styles.scoreOutput}>
                {this.calcScore()}
              </Text>
            </View>
            <View>
              <Text style={styles.scoreOutput}>
                {this.goNoGo(this.props.mosLevel)}
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
