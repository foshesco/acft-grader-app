import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const MOSOutput = (props) => {
    return (
        <View style={styles.mosOutput}>
            <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20 }}>{this.getMOSInfo(this.state.mosInput)}</Text>
            <Text>{this.getLevel(this.state.mosInput)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: 100,
        height: 50,
        textAlign: 'center'
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    }
});

export default MOSOutput;