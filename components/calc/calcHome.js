import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GetMOS from './GetMOS';

const HomeStack = createStackNavigator();

export default function calcHome() {
    return (
        <HomeStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#507858' },
            }}>
            <HomeStack.Screen name="Calculator" component={GetMOS} />
        </HomeStack.Navigator>
    );
}
