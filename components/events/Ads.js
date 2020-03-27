import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
// AdMob
import {
    AdMobBanner,
} from 'expo-ads-admob';

export default class App extends Component {
    bannerError = () => {
        console.log('banner ad not loading')
    }
    bannerAdReceived = () => {
        console.log('banner ad received')
    }
    render() {
        return (
            <View style={styles.container}>
                <AdMobBanner
                    bannerSize="banner"
                    adUnitID="ca-app-pub-1171575529205896/8947867564"
                    onDidFailToReceiveAdWithError={this.bannerError} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});