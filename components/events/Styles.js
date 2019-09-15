import { StyleSheet } from 'react-native';

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
  runContainer: {
    flexDirection: 'row'
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
  output: {
    borderColor: 'black',
    borderWidth: 1,
    width: 75,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  failed: {
    borderColor: 'black',
    borderWidth: 1,
    width: 75,
    height: 35,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white'
  },
  running: {
    flexDirection: 'row'
  },
  eventContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  child1: {},
  child2: {},
  child3: {},
});

export { styles };
