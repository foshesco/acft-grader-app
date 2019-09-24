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
  ScrollView
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

    this.state = {
      clear: false,
      totalScore: 'hi',
      mosInput: '',
      mosLevel: '',
      mosDesc: {
        '11A': '1Infantry',
        '37F': '3Psychological Operations Specialst',
        '42A': '3Secretary',
      },
    };
  }

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
            borderRadius: 2,
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
          enabled >
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View>
              <View>
                <Deadlift mosLevel={this.state.mosLevel} />
              </View>
              <View>
                <PowerThrow mosLevel={this.state.mosLevel} />
              </View>

              <View>
                <ReleasePushups mosLevel={this.state.mosLevel} />
              </View>

              <View>
                <SprintDragCarry mosLevel={this.state.mosLevel} />
              </View>

              <View>
                <LegTuck mosLevel={this.state.mosLevel} />
              </View>

              <View>
                <Run mosLevel={this.state.mosLevel} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView >

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
            paddingBottom: 2
          }}
        />
        <View style={styles.scoreContainer}>
          <Score />
        </View>
        <View style={styles.footerContainer}>
          <Footer title="3932 - Group" />
        </View>
      </View >
    );
  }
}

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  headerContainer: {
    height: '8%',
    backgroundColor: 'green',
  },
  mosInfoContainer: {
    paddingLeft: '6%',
    paddingTop: '4%',
    height: '17%',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  eventContainer: {
    height: '53%',
    justifyContent: 'space-evenly',
    flexGrow: 1
  },
  scoreContainer: {
    height: '17%',
    borderWidth: 1,
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
