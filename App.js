import React from 'react';
import { View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import CalcHome from './components/calc/calcHome';
import TimerHome from './components/TimerHome';
import Instructions from './components/Instructions';
import Docs from './components/Docs';
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
              } else if (route.name === 'Instructions') {
                iconName = focused ? 'md-clipboard' : 'md-clipboard';
              } else if (route.name === 'Timer') {
                iconName = focused ? 'ios-timer' : 'ios-timer';
              } else if (route.name === 'Docs') {
                iconName = focused ? 'ios-book' : 'ios-book';
              }
              return <Ionicons name={iconName} size={hp('3%')} color={color} />;
            },
          })}
          tabBarOptions={{
            inactiveBackgroundColor: '#507858',
            activeBackgroundColor: '#507858',
            activeTintColor: 'darkgray',
            inactiveTintColor: 'white',
            labelPosition: 'below-icon',
            style: {
              backgroundColor: '#507858',
            },
          }}
        >
          <Tab.Screen name='Instructions' component={Instructions} />
          <Tab.Screen name='Calc' component={CalcHome} />
          <Tab.Screen name='Timer' component={TimerHome} />
          <Tab.Screen name='Docs' component={Docs} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  async _cacheResourcesAsync() {
    const images = [require('./assets/splash.png')];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }
}
