import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Dimensions
} from 'react-native';
import Deadlift from './events/Deadlift';
import PowerThrow from './events/PowerThrow';
import ReleasePushups from './events/ReleasePushups';
import SprintDragCarry from './events/SprintDragCarry';
import LegTuck from './events/LegTuck';
import Run from './events/Run';
import Score from './Score';

export default class GetMOS extends Component {
    constructor() {
        super();

        this.state = {
            clear: false,
            mosInput: '',
            mosLevel: '',
            mosDesc: {
                '11A': '1Infantry',
                '37F': '3PSYOP',
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
            console.log(this.state.mosLevel);

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

    handleChangeInput = text => {
        this.setState({ mosLevel: text });
    };

    render() {
        return (
            <View style={styles.screen}>
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
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={styles.mosText}>
                            <Text style={{ paddingBottom: 40, paddingTop: 15 }}>Job - </Text>
                            <Text style={{ paddingRight: 5 }}>Level - </Text>
                        </View>
                        <View style={styles.mosOutput}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    fontSize: 20,
                                    paddingBottom: 30,
                                }}>
                                {this.getMOSInfo(this.state.mosInput)}
                            </Text>
                            <Text>{this.getLevel(this.state.mosInput)}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}>
                    <View style={styles.screen2}>
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
                <View>
                    <Score mosLevel={this.state.mosLevel} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mosInfoContainer: {
        padding: 10,
        height: 160,
        flexDirection: 'row',
    },
    mosInput: {
        flexDirection: 'column',
        textAlign: 'right',
        paddingRight: '10%',
        padding: '5%'
    },
    mosText: {
        textAlign: 'right',
        paddingBottom: '5%',
        paddingTop: '5%',
    },
    mosOutput: {
        paddingBottom: '10%',
        paddingTop: '10%',
    },
    title2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10,
        paddingTop: 10,
    },
    titleName: {
        fontSize: 22,
        justifyContent: 'center',
        textDecorationLine: 'underline',
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
    },
    enterMOS: {
        fontSize: 22,
        marginVertical: 4,
        textAlign: 'center',
    },
});
