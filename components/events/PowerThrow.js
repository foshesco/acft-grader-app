import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

export default class PowerThrow extends Component {
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

        if (powerThrowScore.scoreSheet[e]) {
            i = powerThrowScore.scoreSheet[e];
            return i;
        }
    }

    render() {
        return (
            <View>
                <View style={styles.eventContainer}>
                    <Text style={styles.eventName}>Power Throw</Text>
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
    },
    output: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 50,
    },
    eventContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
});
