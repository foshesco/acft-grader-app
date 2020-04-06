import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adShown: false
        }
    }

    render() {
        const { onAdHandler } = this.props;
        bannerError = () => {
            console.log('banner ad not loading')
        }
        bannerAdReceived = () => {
            console.log('banner ad received');
        }
        onAdHandlerCheck = () => {
            onAdHandler("true");
        }

        return (
            <View style={styles.container}>
                <AdMobBanner style={styles.bannerAd}
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    onAdLoaded={this.onAdHandlerCheck}
                    onAdFailedToLoad={this.onAdHandlerCheck}
                    onDidFailToReceiveAdWithError={this.bannerError}
                    onAdViewDidReceiveAd={this.bannerAdReceived} />
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