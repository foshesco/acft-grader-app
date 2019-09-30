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
            puScore: 0,
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
                    70: 100,
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
        const { onPUHandler } = this.props;

        return (
            <View>
                <View style={styles.eventContainer}>
                    <View styles={styles.child1}>
                        <Text style={styles.eventName}>HAND-RELEASE{'\n'}PUSH-UP</Text>
                    </View>
                    <View styles={styles.child2}>
                        <View>
                            <TextInput
                                {...this.props}
                                style={styles.input}
                                keyboardType="number-pad"
                                autoCorrect={false}
                                maxLength={2}
                                onChange={event => {
                                    onPUHandler(
                                        event.nativeEvent.text,
                                        this.getPUScore(event.nativeEvent.text)
                                    );
                                }}
                                value={this.props.puScoreInput}
                            />
                        </View>
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>{this.props.puScore}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
