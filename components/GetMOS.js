import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MOSInput from './MOSInput';

export default class GetMOS extends Component {

    constructor() {
        super();

        this.state = {
            mosInput: '',
            mosDesc: [
                { "11A": "1Infantry" }
            ]
        }
    }

    getMOSInfo() {
        let mosInput = this.state.mosInput;
        let mos = this.state.mosDesc;

        if (mosInput in mos) {
            this.setState({
                mosDesc,
                mosInput: ''
            })
        }
    }

    render() {
        return (
            <View style={styles.screen}>
                <MOSInput
                    textChange={mosInput => this.setState({ mosInput })}
                    getMOSInfo={() => this.getMOSInfo()}
                />
                <View>
                    <Text>{this.state.mosInput}</Text>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
});