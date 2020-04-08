import * as React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import STC from './STC';

import PDFReader from 'rn-pdf-reader-js'

function CompleteWorkout1() {
    return (
        <View style={{ flex: 1 }}>
            <Text>Week 1</Text>
            <View>
                <Text>Day 1</Text>
                <Text>Squat</Text>
                <Text>Bench</Text>
                <Text>Deadlift</Text>
            </View>
        </View>
    );
}

function Deadlift() {
    return (
        <PDFReader
            source={{
                uri: 'https://www.army.mil/e2/downloads/rv7/acft/acft_ioc.pdf',
            }}
        />
    );
}

function WorkoutsHome({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ padding: hp('2%'), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: hp('1%'), textDecorationLine: "underline", fontSize: hp('2.5%') }}>Complete Workouts</Text>
                <Button
                    title="Strength + Run - 10 Weeks"
                    onPress={() => navigation.navigate('CompleteWorkout1')}
                />
            </View>
            <View style={{ padding: hp('2%'), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: hp('1%'), textDecorationLine: "underline", fontSize: hp('2.5%') }}>Strength Workouts</Text>
                <Button
                    title="The Big 3 - 10 Weeks"
                    onPress={() => navigation.navigate('Deadlift')}
                />
                <Button
                    title='Army "Strength" Training Circut - 1 Day'
                    onPress={() => navigation.navigate('STC')}
                />
            </View>
            <View style={{ padding: hp('2%'), alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', paddingBottom: hp('1%'), textDecorationLine: "underline", fontSize: hp('2.5%') }}>Run Workouts</Text>
                <Button
                    title="Two Miles for Time - 5 Weeks"
                    onPress={() => navigation.navigate('Deadlift')}
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
            <HomeStack.Screen name="Workouts" component={WorkoutsHome} />
            <HomeStack.Screen name="CompleteWorkout1" component={CompleteWorkout1} />
            <HomeStack.Screen name="STC" component={STC} />
            <HomeStack.Screen name="Deadlift" component={Deadlift} />
        </HomeStack.Navigator>
    );
}
