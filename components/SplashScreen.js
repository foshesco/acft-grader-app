import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goNoGo: 'GO',
            totalScore: '',
        };
    }

    render() {
        const viewStyles = [
            styles.container,
            { backgroundColor: 'green' }
        ];
        const textStyles = {
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold'
        };
        return (
            <View style={viewStyles}>
                <View>
                    <Text style={textStyles}>
                        /600
                </Text>
                </View>
                <View>
                    <Text style={textStyles}>
                        Did you know...
                </Text>
                    <Text>
                        The 2 mile run is the dumbest event everrrrrrrrrr.
                </Text>
                </View>
            </View>
        );
    }
}