import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb'
  },
  eventName: {
    fontSize: hp('1.5%'),
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
    color: '#d1d1d1',
  },
  output: {
    fontSize: hp('2%'),
    fontWeight: '400',
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: hp('0.5%'),
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
    paddingTop: hp('0.5%'),
  },
  running: {
    flexDirection: 'row',
  },
  eventContainer: {
    flexDirection: 'row',
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('2.3%'),
    justifyContent: 'space-around',
  },
  eventBottom: {
    marginBottom: hp('3%'),
  },
  modalContent: {
    height: hp('69%'),
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: hp('2%'),
    paddingBottom: hp('1%'),
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalButton: {
    padding: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#507858',
    width: wp('30%'),
    fontSize: hp('1.7%'),
    alignSelf: 'center',
  },
  modalTitleSummary: {
    fontSize: hp('2%'),
    paddingBottom: hp('1%'),
    textDecorationLine: 'underline'
  },
  modalEventTitle: {
    width: wp('35%'),
    fontSize: hp('1.7%'),
    fontWeight: 'bold',
    color: '#507858'
  },
  modalTitle: {
    fontSize: hp('2.5%'),
    padding: hp('2%'),
    textAlign: 'center',
  },
  modalSummary: {
    fontSize: hp('2%'),
    paddingBottom: hp('2%'),
  },
  tableContainer: {
    flex: 1,
    padding: hp('2%'),
    paddingTop: hp('2%'),
    marginBottom: hp('1%'),
    backgroundColor: '#fff',
  },
  tableHead: {
    height: hp('5%'),
    backgroundColor: '#f1f8ff',
  },
  tableWrapper: {
    flexDirection: 'row',
  },
  tableTitle: {
    flex: 1,
    backgroundColor: '#f6f8fa',
  },
  tableRow: {
    height: hp('5%'),
  },
  tableText: {
    textAlign: 'center',
    fontSize: hp('1.7%'),
  },
});

export { styles };
