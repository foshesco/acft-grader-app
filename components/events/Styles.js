import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  eventName: {
    fontSize: 15,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  output: {
    borderColor: 'black',
    borderWidth: 1,
    width: 80,
    height: 40,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
  eventContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
});

export { styles };
