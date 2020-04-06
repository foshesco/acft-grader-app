import * as React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PDFReader from 'rn-pdf-reader-js'
function ACFT() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf',
            }}
        />
    );
}

function AR_670_1() {
    return (
        <PDFReader
            source={{
                uri: 'https://history.army.mil/html/forcestruc/docs/AR670-1.pdf',
            }}
        />
    );
}



function DL() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page26',
            }}
        />
    );
}

function SPT() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page28',
            }}
        />
    );
}

function PU() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page30',
            }}
        />
    );
}

function SDC() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page31',
            }}
        />
    );
}

function LT() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page34',
            }}
        />
    );
}

function Run() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page35',
            }}
        />
    );
}

function DocsHome({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ padding: hp('2%'), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: hp('2%') }}>Army Docs</Text>
                <Button
                    title="ACFT IOC Manual - Oct 2019"
                    onPress={() => navigation.navigate('ACFT')}
                />
                <Button
                    title="AR 670-1"
                    onPress={() => navigation.navigate('AR_670_1')}
                />
            </View>
            <View style={{ padding: hp('2%'), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: hp('2%') }}>Instructions for ACFT Events</Text>
                <Button
                    title="3 Repetition Maximum Deadlift"
                    onPress={() => navigation.navigate('DL')}
                />
                <Button
                    title="Standing Power Throw"
                    onPress={() => navigation.navigate('SPT')}
                />
                <Button
                    title="Hand-Release Push-Up"
                    onPress={() => navigation.navigate('PU')}
                />
                <Button
                    title="Sprint-Drag-Carry"
                    onPress={() => navigation.navigate('SDC')}
                />
                <Button
                    title="Leg Tuck"
                    onPress={() => navigation.navigate('LT')}
                />
                <Button
                    title="2-Mile Run"
                    onPress={() => navigation.navigate('Run')}
                />
            </View>
        </View >
    );
}

const HomeStack = createStackNavigator();

export default function Docs() {
    return (
        <HomeStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#507858' },
            }}>
            <HomeStack.Screen name="Docs for Nerds" component={DocsHome} />
            <HomeStack.Screen name="ACFT" component={ACFT} />
            <HomeStack.Screen name="AR_670_1" component={AR_670_1} />
            <HomeStack.Screen name="DL" component={DL} />
            <HomeStack.Screen name="SPT" component={SPT} />
            <HomeStack.Screen name="PU" component={PU} />
            <HomeStack.Screen name="SDC" component={SDC} />
            <HomeStack.Screen name="LT" component={LT} />
            <HomeStack.Screen name="Run" component={Run} />
        </HomeStack.Navigator>
    );
}
