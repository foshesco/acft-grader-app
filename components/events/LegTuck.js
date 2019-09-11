import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

export default class LegTuck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ptScoreInput: '',
            powerThrowScore: {
                minMod: {
                    4.6: 60
                },
                minSig: {
                    6.6: 65
                },
                minHvy: {
                    8.5: 70
                },
                maxMod: {
                    13.5: 100
                },
                scoreSheet: {
                    13.1: 98,
                    13.2: 99,
                    13.3: 99,
                    13.4: 99,
                    13.5: 100
                },
            },
        };
    }

    getPTScore(e) {
        let i;
        let powerThrowScore = this.state.powerThrowScore;

        i = powerThrowScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e <= 8.5) {
                    return 'fail';
                } else if (e >= 13.5) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '2') {
                if (e <= 6.6) {
                    return 'fail';
                } else if (e >= 13.5) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '3') {
                if (e <= 8.5) {
                    return 'fail';
                } else if (e >= 13.5) {
                    return 100;
                } else {
                    return i;
                }
            }
        }
    }

    render() {
        return (
            <View>
                <View style={styles.eventContainer}>
                    <Text style={styles.eventName}>LEG TUCK</Text>
                    <PowerThrow2 textChange={ptScoreInput => this.setState({ ptScoreInput })} />
                    <View>
                        <Text style={styles.output}>
                            {this.getPTScore(this.state.ptScoreInput)}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const PowerThrow2 = props => {
    return (
        <View>
            <TextInput
                style={styles.input}
                keyboardType='decimal-pad'
                maxLength={4}
                autoCorrect={false}
                onChangeText={ptScoreInput => props.textChange(ptScoreInput)}
                value={props.ptScoreInput}
                onKeyPress={props.getPTScore}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    eventName: {
        fontSize: 15,
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 50,
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center"
    },
    output: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 50,
        fontSize: 20,
        fontWeight: '400',
        textAlign: "center"
    },
    eventContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
});
