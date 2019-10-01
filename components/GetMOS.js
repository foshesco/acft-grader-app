import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Deadlift from './events/Deadlift';
import PowerThrow from './events/PowerThrow';
import ReleasePushups from './events/ReleasePushups';
import SprintDragCarry from './events/SprintDragCarry';
import LegTuck from './events/LegTuck';
import Run from './events/Run';
import Score from './Score';
import Footer from './Footer';
import Header from './Header';

export default class GetMOS extends Component {
  constructor() {
    super();

    this.state = this.getInitialState();

    this.state = {
      dlScoreInput: '',
      dlScore: '',
      ptScoreInput: '',
      ptScore: '',
      puScoreInput: '',
      puScore: '',
      sdcScoreInput: '',
      sdcScore: '',
      ltScoreInput: '',
      ltScore: '',
      runScoreInput: '',
      runScore: '',
      totalScore: '',
      goNoGo: '',
      mosInput: '',
      mosOutput: '',
      mosLevel: '',
      mosDesc: {
        '11A': '1Infantry',
        '37F': '3Psychological Operations Specialst',
        '42A': '3Secretary',
      },
    };
  }

  getInitialState = () => {
    const initialState = {
      dlScoreInput: '',
      dlScore: '',
      ptScoreInput: '',
      ptScore: '',
      puScoreInput: '',
      puScore: '',
      sdcScoreInput: '',
      sdcScore: '',
      ltScoreInput: '',
      ltScore: '',
      runScoreInput: '',
      runScore: '',
      totalScore: '',
      goNoGo: '',
      mosLevel: '',
      mosInput: ''
    };
    return initialState;
  };

  clearState = () => {
    this.setState(this.getInitialState());
  };

  getMOSInfo(e) {
    let mos;
    let lvl;
    let mosDesc = this.state.mosDesc;
    let invalid = (
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '500',
          backgroundColor: 'red',
          width: '100%',
          textAlign: 'center',
        }}>
        Invalid MOS
      </Text>
    );

    if (mosDesc[e]) {
      lvl = mosDesc[e].substring(0, 1);

      if (this.state.mosLevel != lvl) {
        this.setState({ mosLevel: lvl });
      }
      mos = mosDesc[e].substring(1, 100);

      return mos;
    } else if (e !== '' && e.length >= 3 && !mosDesc[e]) {
      return invalid;
    }
  }

  getLevel(e) {
    let i;
    let mosDesc = this.state.mosDesc;

    if (mosDesc[e]) {
      i = mosDesc[e].substring(0, 1);
      if (i.charAt(0) != 1 && i.charAt(0) != 2 && i.charAt(0) != 3) {
        return null;
      } else if (i.charAt(0) == 1) {
        return (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              backgroundColor: 'black',
              width: '100%',
              textAlign: 'center',
            }}>
            HEAVY
          </Text>
        );
      } else if (i.charAt(0) == 2) {
        return (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              backgroundColor: 'blue',
              width: '100%',
              textAlign: 'center',
            }}>
            SIGNIFICANT
          </Text>
        );
      } else if (i.charAt(0) == 3) {
        return (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
              backgroundColor: 'pink',
              width: '100%',
              textAlign: 'center',
            }}>
            MODERATE
          </Text>
        );
      }
    }
  }

  onDLHandler = (e, x) => {
    this.setState({ dlScoreInput: e });
    this.setState({ dlScore: x });
  };

  onPTHandler = (e, x) => {
    this.setState({ ptScoreInput: e });
    this.setState({ ptScore: x });
  };

  onPUHandler = (e, x) => {
    this.setState({ puScoreInput: e });
    this.setState({ puScore: x });
  };

  onSDCHandler = (e, x) => {
    this.setState({ sdcScoreInput: e });
    this.setState({ sdcScore: x });
  };

  onLTHandler = (e, x) => {
    this.setState({ ltScoreInput: e });
    this.setState({ ltScore: x });
  };

  onRunHandler = (e, x) => {
    this.setState({ runScoreInput: e });
    this.setState({ runScore: x });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Header title="ACFT Calculator" />
        </View>
        <View style={styles.mosInfoContainer}>
          <View style={styles.mosInput}>
            <Text style={styles.enterMOS}>Enter MOS</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="characters"
              maxLength={4}
              minLength={3}
              autoCorrect={false}
              onChangeText={mosOutput => this.setState({ mosInput: mosOutput })}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={styles.mosText}>
              <Text style={{ paddingBottom: 40, paddingTop: 15 }}>Job: </Text>
              <Text style={{ paddingRight: 5 }}>Level: </Text>
            </View>
            <View style={styles.mosOutput}>
              <Text style={styles.mosOutputText}>
                {this.getMOSInfo(this.state.mosInput)}
              </Text>
              <Text style={styles.mosOutputText}>
                {this.getLevel(this.state.mosInput)}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          }}
        />
        <KeyboardAvoidingView
          style={styles.eventContainer}
          behavior="padding"
          enabled>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <ScrollView>
              <View>
                <View>
                  <Deadlift
                    mosLevel={this.state.mosLevel}
                    onDLHandler={this.onDLHandler}
                    dlScoreInput={this.state.dlScoreInput}
                    dlScore={this.state.dlScore}
                  />
                </View>
                <View>
                  <PowerThrow
                    mosLevel={this.state.mosLevel}
                    onPTHandler={this.onPTHandler}
                    ptScoreInput={this.state.ptScoreInput}
                    ptScore={this.state.ptScore}
                  />
                </View>

                <View>
                  <ReleasePushups
                    mosLevel={this.state.mosLevel}
                    onPUHandler={this.onPUHandler}
                    puScoreInput={this.state.puScoreInput}
                    puScore={this.state.puScore}
                  />
                </View>

                <View>
                  <SprintDragCarry
                    mosLevel={this.state.mosLevel}
                    onSDCHandler={this.onSDCHandler}
                    sdcScoreInput={this.state.sdcScoreInput}
                    sdcScore={this.state.sdcScore}
                  />
                </View>

                <View>
                  <LegTuck
                    mosLevel={this.state.mosLevel}
                    onLTHandler={this.onLTHandler}
                    ltScoreInput={this.state.ltScoreInput}
                    ltScore={this.state.ltScore}
                  />
                </View>

                <View>
                  <Run
                    mosLevel={this.state.mosLevel}
                    onRunHandler={this.onRunHandler}
                    runScoreInput={this.state.runScoreInput}
                    runScore={this.state.runScore}
                  />
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            paddingBottom: 2,
          }}
        />
        <View style={styles.scoreContainer}>
          <Score
            goNoGo={this.goNoGo}
            clearState={this.clearState}
            mosLevel={this.state.mosLevel}
            totalScore={
              this.state.dlScore +
              this.state.ptScore +
              this.state.puScore +
              this.state.sdcScore +
              this.state.ltScore +
              this.state.runScore
            }
            dlScore={this.state.dlScore}
            ptScore={this.state.ptScore}
            puScore={this.state.puScore}
            sdcScore={this.state.sdcScore}
            ltScore={this.state.ltScore}
            runScore={this.state.runScore}
          />
        </View>
        <View style={styles.footerContainer}>
          <Footer title="3932 - Group" />
        </View>
      </View>
    );
  }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerContainer: {
    height: '8%',
    backgroundColor: 'green',
  },
  mosInfoContainer: {
    paddingLeft: '6%',
    paddingTop: '2%',
    paddingBottom: '2%',
    height: '17%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  eventContainer: {
    height: '50%',
    justifyContent: 'space-evenly',
    flexGrow: 1,
  },
  scoreContainer: {
    height: '20%',
    borderTopWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  footerContainer: {
    height: '5%',
    backgroundColor: 'green',
  },
  mosInput: {
    flexDirection: 'column',
    textAlign: 'right',
    paddingRight: '10%',
    padding: '2%',
  },
  mosText: {
    textAlign: 'right',
    paddingBottom: '5%',
    paddingTop: '5%',
  },
  mosOutput: {
    paddingTop: '8%',
  },
  mosOutputText: {
    width: 150,
    height: 35,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F5F5F5',
    marginBottom: 14,
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  enterMOS: {
    fontSize: 22,
    marginVertical: 4,
    textAlign: 'center',
  },
});
