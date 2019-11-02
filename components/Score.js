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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Score extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goNoGo: 'GO',
      totalScore: '',
    };
  }

  calcScore() {
    var e = this.props.mosLevel;

    var totalScore =
      Number(this.props.dlScore) +
      Number(this.props.ptScore) +
      Number(this.props.puScore) +
      Number(this.props.sdcScore) +
      Number(this.props.ltScore) +
      Number(this.props.runScore);

    if (e == 1 || e == 2 || e == 3) {
      if (isNaN(totalScore)) {
        return (
          <Text
            style={{
              color: 'red',
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            FAIL
          </Text>
        );
      } else {
        return (
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            {totalScore}/600
          </Text>
        );
      }
    }
  }

  goNoGo() {
    var e = this.props.mosLevel;

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
        isNaN(this.props.dlScore) ||
        isNaN(this.props.ptScore) ||
        isNaN(this.props.puScore) ||
        isNaN(this.props.sdcScore) ||
        isNaN(this.props.ltScore) ||
        isNaN(this.props.runScore);

      var scoresNotEntered =
        this.props.dlScore == 0 ||
        this.props.ptScore == 0 ||
        this.props.puScore == 0 ||
        this.props.sdcScore == 0 ||
        this.props.ltScore == 0 ||
        this.props.runScore == 0;

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
            }}>
            NO-GO
          </Text>
        );
      } else if (scoresNotEntered) {
        return (
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '500',
              width: '100%',
              flex: 1,
              flexWrap: 'wrap',
              textAlign: 'center',
              paddingTop: hp('1%'),
            }}>
            Enter All Scores
          </Text>
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.mainScoreContainer}>
        <View style={styles.scoreContainer}>
          <View>
            <Text style={styles.scoreTitle1}>POINTS</Text>
          </View>
          <View style={styles.scoreOutput1}>{this.calcScore()}</View>
        </View>
        <View style={styles.goContainer}>
          <View>
            <Text style={styles.scoreTitle2}>GO/NO-GO</Text>
          </View>
          <View style={styles.scoreOutput2}>{this.goNoGo()}</View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.scoreButton}
            onPress={() => this.props.clearState()}>
            <Text style={{ color: 'white' }}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreTitle1: {
    fontSize: hp('2.2%'),
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: hp('2%'),
    textDecorationLine: "underline"
  },
  scoreTitle2: {
    fontSize: hp('2.2%'),
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: hp('2%'),
    textDecorationLine: "underline"
  },
  scoreOutput1: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: wp('20%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  scoreOutput2: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: wp('20%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center'
  },
  scoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#3f4a46',
    height: hp('5%'),
    width: hp('9%'),
    borderRadius: 5,
  },
  mainScoreContainer: {
    flexDirection: 'row',
    padding: wp('2%'),
  },
  scoreContainer: {
    width: wp('30%'),
  },
  goContainer: {
    width: wp('30%'),
  },
  buttonContainer: {
    width: wp('35%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
});
