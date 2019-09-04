import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const MOSInput = (props) => {
    return (
        <View>
            <Text style={styles.title}>Enter MOS</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='characters'
                maxLength={4}
                minLength={3}
                autoCorrect={false}
                onChangeText={(mosInput) => props.textChange(mosInput)}
                value={props.mosInput}
                onKeyPress={props.getMOSInfo}
            />
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

export default MOSInput;