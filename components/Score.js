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
        return <Text
          style={{
            color: 'red',
            fontSize: 18,
            fontWeight: '500',
            textAlign: 'center',
            paddingTop: '4%'
          }}>FAIL</Text>;
      } else {
        return <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '500',
            textAlign: 'center',
            paddingTop: '4%'
          }}>{totalScore}/600</Text>
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
                color: 'red',
                fontSize: 20,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
                paddingTop: '5%'
              }}>
              NO-GO
            </Text>
          );
        } else if (e == 2 && this.totalScore < 390) {
          return (
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
                paddingTop: '5%'
              }}>
              NO-GO
            </Text>
          );
        } else if (e == 3 && this.totalScore < 360) {
          return (
            <Text
              style={{
                color: 'red',
                fontSize: 20,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
                paddingTop: '5%'
              }}>
              NO-GO
            </Text>
          );
        } else {
          return (
            <Text
              style={{
                color: 'green',
                fontSize: 20,
                fontWeight: '500',
                width: '100%',
                textAlign: 'center',
                paddingTop: '4%'
              }}>
              GO
            </Text>
          );
        }
      } else if (scoresEqualFail || scoresUndefined) {
        return (
          <Text
            style={{
              color: 'red',
              fontSize: 20,
              fontWeight: '500',
              width: '100%',
              textAlign: 'center',
              paddingTop: '5%'
            }}>
            NO-GO
          </Text>
        );
      } else if (scoresNotEntered) {
        return (
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontWeight: '500',
              width: '100%',
              textAlign: 'center',
              paddingTop: '5%'
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
              <View style={styles.scoreOutput}>
                {this.calcScore()}
              </View>
              <View style={styles.scoreOutput}>
                {this.goNoGo(this.props.mosLevel)}
              </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.scoreButton}
              onPress={() => this.props.clearState()}>
              <Text style={{ color: 'white' }}>Clear</Text>
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
    paddingTop: '5%',
    paddingBottom: '15%',
    color: 'black',
    textAlignVertical: 'center',
  },
  scoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f4a46',
    height: 50,
    width: 70,
    borderRadius: 5
  },
  scoreOutput: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    marginBottom: '20%',
    width: '70%',
    height: 45,
    justifyContent: 'center',
  },
  mainScoreContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '5%',
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