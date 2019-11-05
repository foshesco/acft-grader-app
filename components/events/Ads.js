import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo-ads-admob';


const Ads = props => {
    return (
        <View style={styles.footer}>
            <AdMobBanner
                style={styles.bottomBanner}
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                testDeviceID="EMULATOR"
                didFailToReceiveAdWithError={this.bannerError}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    bottomBanner: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
});

export default Ads;
