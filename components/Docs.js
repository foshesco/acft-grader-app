import * as React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import PDFReader from 'rn-pdf-reader-js';
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ACFT General Info</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('ACFT')}
          >
            <Text style={styles.docButtonText}>ACFT IOC Manual</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('ACFT_Standards')}
          >
            <Text style={styles.docButtonText}>ACFT Standards</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('ACFT_Alternate_Events')}
          >
            <Text style={styles.docButtonText}>ACFT Alternate Events</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('AR_670_1')}
          >
            <Text style={styles.docButtonText}>AR 670-1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ACFT Event Info</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Deadlift')}
          >
            <Text style={styles.docButtonText}>
              3 Repetition Maximum Deadlift
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Standing_Power_Throw')}
          >
            <Text style={styles.docButtonText}>Standing Power Throw</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Pushup')}
          >
            <Text style={styles.docButtonText}>Hand-Release Push-Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Sprint_Drag_Carry')}
          >
            <Text style={styles.docButtonText}>Sprint-Drag-Carry</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Leg_Tuck')}
          >
            <Text style={styles.docButtonText}>Leg Tuck</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Two_Mile_Run')}
          >
            <Text style={styles.docButtonText}>2-Mile Run</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ACFT Alternate Event Info</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Row')}
          >
            <Text style={styles.docButtonText}>
              5000 Meter Row (Alternate Event)
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Bike')}
          >
            <Text style={styles.docButtonText}>
              15000 Meter Bike (Alternate Event)
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            style={styles.docButton}
            onPress={() => navigation.navigate('Swim')}
          >
            <Text style={styles.docButtonText}>
              1000 Meter Swim (Alternate Event)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const HomeStack = createStackNavigator();

export default function Docs() {
  return (
    <HomeStack.Navigator
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#507858' },
      }}
    >
      <HomeStack.Screen name='Docs for Nerds' component={DocsHome} />
      <HomeStack.Screen name='ACFT' component={ACFT} />
      <HomeStack.Screen name='ACFT_Standards' component={ACFT_Standards} />
      <HomeStack.Screen
        name='ACFT_Alternate_Events'
        component={ACFT_Alternate_Events}
      />
      <HomeStack.Screen name='AR_670_1' component={AR_670_1} />
      <HomeStack.Screen name='Deadlift' component={Deadlift} />
      <HomeStack.Screen
        name='Standing_Power_Throw'
        component={Standing_Power_Throw}
      />
      <HomeStack.Screen name='Pushup' component={Pushup} />
      <HomeStack.Screen
        name='Sprint_Drag_Carry'
        component={Sprint_Drag_Carry}
      />
      <HomeStack.Screen name='Leg_Tuck' component={Leg_Tuck} />
      <HomeStack.Screen name='Two_Mile_Run' component={Two_Mile_Run} />
      <HomeStack.Screen name='Row' component={Row} />
      <HomeStack.Screen name='Bike' component={Bike} />
      <HomeStack.Screen name='Swim' component={Swim} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: hp('5%'),
    paddingTop: hp('1%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  headerText: {
    fontSize: hp('2%'),
    paddingTop: hp('1.5%'),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    height: hp('20%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  item: {
    padding: wp('2%'),
  },
  container2: {
    height: hp('26%'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  docButton: {
    width: wp('42%'),
    height: hp('6%'),
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
    fontSize: hp('1.8%'),
    textAlign: 'center',
  },
});
