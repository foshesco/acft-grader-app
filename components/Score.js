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
        this.props.dlScore == 'fail' ||
        this.props.ptScore == 'fail' ||
        this.props.puScore == 'fail' ||
        this.props.sdcScore == 'fail' ||
        this.props.ltScore == 'fail' ||
        this.props.runScore == 'fail';

      var scoresNotEntered =
        this.props.dlScore == '' ||
        this.props.ptScore == '' ||
        this.props.puScore == '' ||
        this.props.sdcScore == '' ||
        this.props.ltScore == '' ||
        this.props.runScore == '';

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
                paddingBottom: hp('7.5%'),
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
                paddingBottom: hp('7.5%'),
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
                paddingBottom: hp('7.5%'),
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
                paddingBottom: hp('7.5%'),
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
              paddingBottom: hp('7.5%'),
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
  };

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
            <View style={styles.scoreOutput}>{this.calcScore()}</View>
            <View style={styles.scoreOutput}>
              {this.goNoGo(this.props.mosLevel)}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.lazyButton}>
              <TouchableOpacity
                style={styles.scoreButton}
                onPress={() => this.props.imLazy()}>
                <Text style={{ color: 'white' }}>I'm Lazy</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scoreTitle: {
    fontSize: hp('2.5%'),
    paddingTop: hp('1%'),
    paddingBottom: hp('5%'),
    color: 'black',
    textAlignVertical: 'center',
  },
  lazyButton: {
    paddingTop: hp('0.5%'),
    marginBottom: hp('4%'),
    justifyContent: 'center',
  },
  scoreButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3f4a46',
    height: hp('5%'),
    width: hp('8%'),
    borderRadius: 5,
  },
  scoreOutput: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 1,
    marginBottom: hp('3%'),
    width: wp('22%'),
    height: hp('6%'),
    paddingTop: hp('3%'),
    justifyContent: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  mainScoreContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '5%',
  },
  scoreContainer: {
    width: wp('43%'),
  },
  goContainer: {
    width: wp('28%'),
  },
  buttonContainer: {
    width: wp('29%'),
  },
});
