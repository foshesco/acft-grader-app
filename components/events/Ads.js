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
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
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
        backgroundColor: '#ecf0f1',
    },
    bannerAd: {
        position: "absolute",
        width: "100%",
        bottom: 0
    },
    interstitialBanner: {
        width: "100%",
        marginLeft: 0,
        color: '#00FFFF'
    },
});