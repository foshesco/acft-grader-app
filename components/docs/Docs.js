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

function ACFT_Standards() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/fy20_standards.pdf',
            }}
        />
    );
}

function ACFT_Alternate_Events() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page35',
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



function Deadlift() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page26',
            }}
        />
    );
}

function Standing_Power_Throw() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page28',
            }}
        />
    );
}

function Pushup() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page30',
            }}
        />
    );
}

function Sprint_Drag_Carry() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page31',
            }}
        />
    );
}

function Leg_Tuck() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page34',
            }}
        />
    );
}

function Two_Mile_Run() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page35',
            }}
        />
    );
}

function Row() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page36',
            }}
        />
    );
}

function Bike() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page37',
            }}
        />
    );
}

function Swim() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf#page38',
            }}
        />
    );
}

function DocsHome({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ padding: hp('2%') }}>
                <TouchableOpacity style={styles.docButton} onPress={() => navigation.navigate('ACFT')}>
                    <Text style={styles.docButtonText}>
                        ACFT IOC Manual
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.docButton} onPress={() => navigation.navigate('ACFT_Standards')}>
                    <Text style={styles.docButtonText}>
                        ACFT Standards
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.docButton} onPress={() => navigation.navigate('ACFT_Alternate_Events')}>
                    <Text style={styles.docButtonText}>
                        ACFT Alternate Events
                    </Text>
                </TouchableOpacity >

                <Button
                    style={styles.docButton}
                    title="ACFT IOC Manual"
                    onPress={() => navigation.navigate('ACFT')}
                />
                <Button
                    title="ACFT Standards"
                    onPress={() => navigation.navigate('ACFT_Standards')}
                />
                <Button
                    title="ACFT Alternate Events"
                    onPress={() => navigation.navigate('ACFT_Alternate_Events')}
                />
                <Button
                    title="AR 670-1"
                    onPress={() => navigation.navigate('AR_670_1')}
                />
            </View>
            <View style={{ padding: hp('2%') }}>
                <Button
                    title="3 Repetition Maximum Deadlift"
                    onPress={() => navigation.navigate('Deadlift')}
                />
                <Button
                    title="Standing Power Throw"
                    onPress={() => navigation.navigate('Standing_Power_Throw')}
                />
                <Button
                    title="Hand-Release Push-Up"
                    onPress={() => navigation.navigate('Pushup')}
                />
                <Button
                    title="Sprint-Drag-Carry"
                    onPress={() => navigation.navigate('Sprint_Drag_Carry')}
                />
                <Button
                    title="Leg Tuck"
                    onPress={() => navigation.navigate('Leg_Tuck')}
                />
                <Button
                    title="2-Mile Run"
                    onPress={() => navigation.navigate('Two_Mile_Run')}
                />
                <Button
                    title="5000 Meter Row - Alternate"
                    onPress={() => navigation.navigate('Row')}
                />
                <Button
                    title="15000 Meter Bike - Alternate"
                    onPress={() => navigation.navigate('Bike')}
                />
                <Button
                    title="1000 Meter Swim - Alternate"
                    onPress={() => navigation.navigate('Swim')}
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
            <HomeStack.Screen name="ACFT_Standards" component={ACFT_Standards} />
            <HomeStack.Screen name="ACFT_Alternate_Events" component={ACFT_Alternate_Events} />
            <HomeStack.Screen name="AR_670_1" component={AR_670_1} />
            <HomeStack.Screen name="Deadlift" component={Deadlift} />
            <HomeStack.Screen name="Standing_Power_Throw" component={Standing_Power_Throw} />
            <HomeStack.Screen name="Pushup" component={Pushup} />
            <HomeStack.Screen name="Sprint_Drag_Carry" component={Sprint_Drag_Carry} />
            <HomeStack.Screen name="Leg_Tuck" component={Leg_Tuck} />
            <HomeStack.Screen name="Two_Mile_Run" component={Two_Mile_Run} />
            <HomeStack.Screen name="Row" component={Row} />
            <HomeStack.Screen name="Bike" component={Bike} />
            <HomeStack.Screen name="Swim" component={Swim} />
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({
    docButton: {
        width: wp('40%'),
        height: hp('5%'),
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#507858',
    },
    docButtonText: {
        color: '#507858',
        fontWeight: 'bold',
        fontSize: hp('1.8%')
    }
})