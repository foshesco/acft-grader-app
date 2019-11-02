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
              paddingBottom: hp('6%'),
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
              paddingBottom: hp('6%'),
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
                paddingBottom: hp('6.5%'),
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
                paddingBottom: hp('6.5%'),
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
                paddingBottom: hp('6.5%'),
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
                paddingBottom: hp('6.5%'),
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
              paddingBottom: hp('6.5%'),
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
              paddingBottom: hp('7.5%'),
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
            <Text style={styles.scoreTitle1}>TOTAL POINTS:</Text>
          </View>
          <View>
            <Text style={styles.scoreTitle2}>GO/NO-GO:</Text>
          </View>
        </View>
        <View style={styles.goContainer}>
          <View style={styles.scoreOutput1}>{this.calcScore()}</View>
          <View style={styles.scoreOutput2}>{this.goNoGo()}</View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.lazyButton}>
            <TouchableOpacity
              style={styles.scoreButton}
              onPress={() => this.props.imLazy()}>
              <Text style={{ color: 'white' }}>{"I'm Lazy"}</Text>
            </TouchableOpacity>
          </View>
          <View>
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
  scoreTitle1: {
    fontSize: hp('2.2%'),
    color: 'black',
    marginBottom: hp('6.5%'),
    justifyContent: 'center',
  },
  scoreTitle2: {
    fontSize: hp('2.2%'),
    color: 'black',
    justifyContent: 'center',
  },
  lazyButton: {
    marginBottom: hp('5%'),
    justifyContent: 'center',
  },
  scoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f4a46',
    height: hp('5%'),
    width: hp('9%'),
    borderRadius: 5,
  },
  scoreOutput1: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: wp('20%'),
    height: hp('6%'),
    marginBottom: hp('3.5%'),
    justifyContent: 'center',
  },
  scoreOutput2: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    width: wp('20%'),
    height: hp('6%'),
    justifyContent: 'center',
  },
  mainScoreContainer: {
    flexDirection: 'row',
    paddingRight: wp('2%'),
    paddingLeft: wp('5%')
  },
  scoreContainer: {
    width: wp('40%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  goContainer: {
    width: wp('25%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: wp('25%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
