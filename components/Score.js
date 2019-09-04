import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MOSInput from './MOSInput';

export default class Score extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <View>
                    <Text>{props.title}</Text>
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