import React from 'react';
import { View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import calcHome from './components/calc/calcHome';
import Workouts from './components/Workouts';
import Docs from './components/docs/Docs';
import { Ionicons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Calc') {
                iconName = focused ? 'ios-calculator' : 'ios-calculator';
              } else if (route.name === 'Workouts') {
                iconName = focused ? 'ios-power' : 'ios-power';
              } else if (route.name === 'Docs') {
                iconName = focused ? 'ios-book' : 'ios-book';
              }
              return <Ionicons name={iconName} size={hp('3%')} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#507858',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Docs" component={Docs} />
          <Tab.Screen name="Calc" component={calcHome} />
          <Tab.Screen name="Workouts" component={Workouts} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/splash.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}



