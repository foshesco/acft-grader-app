import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { styles } from './Styles';

export default class ReleasePushups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            puScoreInput: '',
            pushupScore: {
                scoreSheet: {
                    62: 96,
                    63: 96,
                    64: 97,
                    65: 97,
                    66: 98,
                    67: 98,
                    68: 99,
                    69: 99,
                    70: 100
                },
            },
        };
    }

    getPUScore(e) {
        let i;
        let pushupScore = this.state.pushupScore;

        i = pushupScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e < 30) {
                    return 'fail';
                } else if (e >= 70) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '2') {
                if (e < 20) {
                    return 'fail';
                } else if (e >= 70) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '3') {
                if (e < 10) {
                    return 'fail';
                } else if (e >= 70) {
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
                    <View styles={styles.child1}>
                        <Text style={styles.eventName}>HAND-RELEASE{"\n"}PUSH-UP</Text>
                    </View>
                    <View styles={styles.child2}>
                        <PowerThrow2 textChange={puScoreInput => this.setState({ puScoreInput })} />
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>
                            {this.getPUScore(this.state.puScoreInput)}
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
                onChangeText={puScoreInput => props.textChange(puScoreInput)}
                value={props.puScoreInput}
                onKeyPress={props.getPUScore}
            />
        </View>
    );
};