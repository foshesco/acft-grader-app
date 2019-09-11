import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import PowerThrow from './events/PowerThrow';
import Deadlift from './events/Deadlift';

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
            console.log(this.state.mosLevel)

            if (this.state.mosLevel != lvl) {
                this.setState({ mosLevel: lvl })
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
                <View>
                    <Text style={styles.title}>Enter MOS</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="characters"
                        maxLength={4}
                        minLength={3}
                        autoCorrect={false}
                        onChangeText={mosOutput => this.setState({ mosInput: mosOutput })}
                    />
                </View>
                <View style={styles.mosOutput}>
                    <Text
                        style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>
                        {this.getMOSInfo(this.state.mosInput)}
                    </Text>
                    <Text>{this.getLevel(this.state.mosInput)}</Text>
                    <Text>test in mos - {this.state.mosLevel}</Text>
                </View>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}>
                    <View style={styles.screen2}>
                        <View>
                            <View style={styles.title2}>
                                <Text style={styles.titleName}>Events</Text>
                                <Text style={styles.titleName}>Raw Score</Text>
                                <Text style={styles.titleName}>Points</Text>
                            </View>
                        </View>

                        <View>
                            <Deadlift mosLevel={this.state.mosLevel} />
                        </View>

                        <View>
                            <PowerThrow />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    screen2: {
        flex: 4,
        padding: 10,
    },
    title2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 10,
        paddingTop: 40,
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
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    mosOutput: {
        paddingBottom: 20,
        paddingTop: 10,
    },
});
