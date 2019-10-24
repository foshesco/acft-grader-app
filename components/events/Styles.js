import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  eventName: {
    fontSize: hp('1.7%'),
    width: wp('30%'),
  },
  titleName: {
    fontSize: hp('2.7%'),
    justifyContent: 'center',
    textDecorationLine: 'underline',
    paddingBottom: hp('3%'),
  },
  initialScore: {
    fontSize: hp('2%'),
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: hp('0.5%'),
    color: '#d1d1d1'
  },
  output: {
    fontSize: hp('2%'),
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: hp('0.5%')
  },
  pointsContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: wp('18%'),
    height: hp('4%'),
  },
  runContainer: {
    flexDirection: 'row',
  },
  failed: {
    color: 'red',
    fontSize: hp('2%'),
    fontWeight: '500',
    textAlign: 'center',
    paddingTop: hp('0.5%')
  },
  running: {
    flexDirection: 'row',
  },
  eventContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('2.3%'),
    justifyContent: 'space-around',
  },
  eventBottom: {
    marginBottom: hp('3%'),
  },
});

export { styles };
