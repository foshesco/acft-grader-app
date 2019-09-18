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

export default class Run extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runTotalScore: '',
            runMinInput: '',
            runSecInput: '',
            runScore: {
                scoreSheet: {
                    1245: 100,
                    1246: 99,
                    1247: 99,
                    1248: 99,
                    1249: 99,
                    1250: 99,
                    1251: 99,
                },
            },
        };
    }

    getRunScore(e) {
        let i;
        let runScore = this.state.runScore;
        e = this.state.runMinInput.concat(this.state.runSecInput)

        console.log("e", e)

        i = runScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e >= 1800) {
                    return 'fail';
                } else if (e <= 1245) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '2') {
                if (e >= 1900) {
                    return 'fail';
                } else if (e <= 1245) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '3') {
                if (e >= 2107) {
                    return 'fail';
                } else if (e <= 1245) {
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
                        <Text style={styles.eventName}>TWO-MILE RUN</Text>
                    </View>
                    <View styles={styles.child2}>
                        <View style={styles.runContainer}>
                            <TextInput
                                onChangeText={runMinInput => this.setState({ runMinInput })}
                                style={styles.input1}
                                keyboardType='decimal-pad'
                                maxLength={2}
                                autoCorrect={false}
                                value={this.state.value}
                                onChangeText={value => {
                                    this.setState({ value })
                                    if (value) this.refs.input_2.focus(); //assumption is TextInput ref is input_2
                                }}
                            />
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, borderTopColor: 'black', borderTopWidth: 1 }}>
                                <Text style={{ fontSize: 22 }}>:</Text>
                            </View>
                            <TextInput
                                onChangeText={runSecInput => this.setState({ runSecInput })}
                                style={styles.input2}
                                keyboardType='decimal-pad'
                                maxLength={2}
                                autoCorrect={false}
                                value={this.state.runSecInput}
                            />
                        </View >
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>
                            {this.getRunScore()}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}