import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class ReleasePushups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            puScoreInput: '',
            puScore: 0,
            pushupScore: {
                scoreSheet: {
                    0: 0,
                    1: 6,
                    2: 12,
                    3: 18,
                    4: 24,
                    5: 30,
                    6: 36,
                    7: 42,
                    8: 48,
                    9: 54,
                    10: 60,
                    11: 60,
                    12: 61,
                    13: 61,
                    14: 62,
                    15: 62,
                    16: 63,
                    17: 63,
                    18: 64,
                    19: 64,
                    20: 65,
                    21: 65,
                    22: 66,
                    23: 66,
                    24: 67,
                    25: 67,
                    26: 68,
                    27: 68,
                    28: 69,
                    29: 69,
                    30: 70,
                    31: 71,
                    32: 72,
                    33: 73,
                    34: 74,
                    35: 75,
                    36: 76,
                    37: 77,
                    38: 78,
                    39: 79,
                    40: 80,
                    41: 81,
                    42: 82,
                    43: 83,
                    44: 84,
                    45: 85,
                    46: 86,
                    47: 87,
                    48: 88,
                    49: 89,
                    50: 90,
                    51: 90,
                    52: 91,
                    53: 91,
                    54: 92,
                    55: 92,
                    56: 93,
                    57: 93,
                    58: 94,
                    59: 94,
                    60: 95,
                    61: 95,
                    62: 96,
                    63: 96,
                    64: 97,
                    65: 97,
                    66: 98,
                    67: 98,
                    68: 99,
                    69: 99,
                    70: 100
                },
            },
            items: [
                { label: '0', value: '0' },
                { label: '1', value: '6' },
                { label: '2', value: '12' },
                { label: '3', value: '18' },
                { label: '4', value: '24' },
                { label: '5', value: '30' },
                { label: '6', value: '36' },
                { label: '7', value: '42' },
                { label: '8', value: '48' },
                { label: '9', value: '54' },
                { label: '10', value: '60' },
                { label: '11', value: '60' },
                { label: '12', value: '61' },
                { label: '13', value: '61' },
                { label: '14', value: '62' },
                { label: '15', value: '62' },
                { label: '16', value: '63' },
                { label: '17', value: '63' },
                { label: '18', value: '64' },
                { label: '19', value: '64' },
                { label: '20', value: '65' },
                { label: '21', value: '65' },
                { label: '22', value: '66' },
                { label: '23', value: '66' },
                { label: '24', value: '67' },
                { label: '25', value: '67' },
                { label: '26', value: '68' },
                { label: '27', value: '68' },
                { label: '28', value: '69' },
                { label: '29', value: '69' },
                { label: '30', value: '70' },
                { label: '31', value: '71' },
                { label: '32', value: '72' },
                { label: '33', value: '73' },
                { label: '34', value: '74' },
                { label: '35', value: '75' },
                { label: '36', value: '76' },
                { label: '37', value: '77' },
                { label: '38', value: '78' },
                { label: '39', value: '79' },
                { label: '40', value: '80' },
                { label: '41', value: '81' },
                { label: '42', value: '82' },
                { label: '43', value: '83' },
                { label: '44', value: '84' },
                { label: '45', value: '85' },
                { label: '46', value: '86' },
                { label: '47', value: '87' },
                { label: '48', value: '88' },
                { label: '49', value: '89' },
                { label: '50', value: '90' },
                { label: '51', value: '90' },
                { label: '52', value: '91' },
                { label: '53', value: '91' },
                { label: '54', value: '92' },
                { label: '55', value: '92' },
                { label: '56', value: '93' },
                { label: '57', value: '93' },
                { label: '58', value: '94' },
                { label: '59', value: '94' },
                { label: '60', value: '95' },
                { label: '61', value: '95' },
                { label: '62', value: '96' },
                { label: '63', value: '96' },
                { label: '64', value: '97' },
                { label: '65', value: '97' },
                { label: '66', value: '98' },
                { label: '67', value: '98' },
                { label: '68', value: '99' },
                { label: '69', value: '99' },
                { label: '70', value: '100' },
            ]
        };
    }

    getPUScore(e) {
        let i;
        let pushupScore = this.state.pushupScore;

        i = pushupScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e < 30) {
                    return 'fail';
                } else if (e >= 70) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '2') {
                if (e < 20) {
                    return 'fail';
                } else if (e >= 70) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '3') {
                if (e < 10) {
                    return 'fail';
                } else if (e >= 70) {
                    return 100;
                } else {
                    return i;
                }
            }
        }
    }

    render() {
        const { onPUHandler } = this.props;

        if (this.props.mosLevel === '1' || this.props.mosLevel === '2' || this.props.mosLevel === '3') {
            picker = <Picker
                {...this.props}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Reps',
                    value: null,
                }}
                items={this.state.items}
                onValueChange={(value) => {
                    onPUHandler(
                        value,
                        this.getPUScore((value))
                    );
                }}
                value={this.props.puScoreInput}
                selectedValue={this.props.puScore}
            />
        } else {
            picker = <Picker
                {...this.props}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Reps',
                    value: null,
                }}
                disabled
                items={this.state.items}
                onValueChange={(value) => {
                    onPUHandler(
                        value,
                        this.getPUScore((value))
                    );
                }}
                value={this.props.puScoreInput}
                selectedValue={this.props.puScore}
            />
        }

        return (
            <View>
                <View style={styles.eventContainer}>
                    <View styles={styles.child1}>
                        <Text style={styles.eventName}>HAND-RELEASE{'\n'}PUSH-UP</Text>
                    </View>
                    <View styles={styles.child2}>
                        <View>
                            {picker}
                        </View>
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>{this.props.puScore}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
