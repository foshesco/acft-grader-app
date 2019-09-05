import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import MOSInput from './MOSInput';

export default class GetMOS extends Component {
    constructor() {
        super();

        this.state = {
            mosInput: '',
            mosDesc: {
                '11A': '1Infantry',
                '37F': '3PSYOP',
                '42A': '3Secretary',
            },
        };
    }

    getMOSInfo(e) {
        let i;
        let mosDesc = this.state.mosDesc;

        if (mosDesc[e]) {
            i = mosDesc[e].substring(1, 100);
            return i;
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
                return <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    backgroundColor: 'black',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    HEAVY
                </Text>;
            } else if (i.charAt(0) == 2) {
                return <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    backgroundColor: 'blue',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    SIGNIFICANT
                </Text>;
            } else if (i.charAt(0) == 3) {
                return <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '500',
                    backgroundColor: 'pink',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    MODERATE
                </Text>;
            }
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <MOSInput textChange={mosInput => this.setState({ mosInput })} />
                <View style={styles.mosOutput}>
                    <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>{this.getMOSInfo(this.state.mosInput)}</Text>
                    <Text>{this.getLevel(this.state.mosInput)}</Text>
                </View>
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
    mosOutput: {
        paddingBottom: 20,
        paddingTop: 10,
    },
});
