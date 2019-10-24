import { StyleSheet, Dimensions } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: wp('18%'),
        height: hp('4%'),
        fontSize: hp('1.9%'),
        fontWeight: '400',
        textAlign: 'center',
        color: 'black'
    },
    inputAndroid: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: wp('18%'),
        height: hp('4%'),
        fontSize: hp('1.9%'),
        fontWeight: '400',
        textAlign: 'center',
        color: 'black'
    },
});

export { pickerSelectStyles };
