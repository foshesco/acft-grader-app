import * as React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Time from './Time';

const HomeStack = createStackNavigator();

export default function TimerContainer() {
  return (
    <HomeStack.Navigator
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#507858' },
      }}
    >
      <HomeStack.Screen name='Timer' component={Time} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
