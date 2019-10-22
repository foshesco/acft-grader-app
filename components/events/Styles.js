import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  eventName: {
    fontSize: 15,
    width: 150,
  },
  titleName: {
    fontSize: 22,
    justifyContent: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 30,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 75,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  output: {
    borderColor: 'black',
    borderWidth: 1,
    width: 75,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '1%'
  },
  runContainer: {
    flexDirection: 'row',
  },
  input1: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    width: 35,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  input2: {
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRightColor: 'black',
    borderRightWidth: 1,
    width: 35,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  failed: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: '1%'
  },
  running: {
    flexDirection: 'row',
  },
  eventContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingHorizontal: 10,
    paddingBottom: '5%',
    justifyContent: 'space-around',
  },
  eventBottom: {
    marginBottom: 10,
  },
  child1: {},
  child2: {},
  child3: {},
});

export { styles };
