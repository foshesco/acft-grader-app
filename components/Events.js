import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Events = props => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <View>
                    <View style={styles.title}>
                        <Text style={styles.titleName}>Events</Text>
                        <Text style={styles.titleName}>Raw Score</Text>
                        <Text style={styles.titleName}>Points</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>Deadlift</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>Power Throw</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>Release Push-ups</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>Sprint-Drag-Carry</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>Leg Tuck</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>

                <View>
                    <View style={styles.eventContainer}>
                        <Text style={styles.eventName}>2-Mile Run</Text>
                        <TextInput style={styles.input}></TextInput>
                        <TextInput style={styles.output}></TextInput>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 4,
        padding: 10,
    },
    title: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingBottom: 15
    },
    titleName: {
        fontSize: 22,
        justifyContent: 'center',
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
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop: 20
    },
    eventName: {
        fontSize: 24,
    }
});

export default Events;