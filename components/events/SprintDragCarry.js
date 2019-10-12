import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class SprintDragCarry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sdcTotalScore: '',
            sdcMinInput: '',
            sdcSecInput: '',
            value: '',
            sdcScore: {
                scoreSheet: {
                    "1:40": 100,
                    "1:41": 98,
                    "1:42": 97,
                    "1:43": 96,
                    "1:44": 95,
                    "1:45": 94,
                    "1:46": 93,
                    "1:47": 92,
                    "1:48": 91,
                    "1:49": 90,
                    "1:50": 89,
                    "1:51": 88,
                    "1:52": 87,
                    "1:53": 86,
                    "1:54": 85,
                    "1:55": 84,
                    "1:56": 83,
                    "1:57": 82,
                    "1:58": 81,
                    "1:59": 80,
                    "2:00": 79,
                    "2:01": 78,
                    "2:02": 77,
                    "2:03": 76,
                    "2:04": 75,
                    "2:05": 74,
                    "2:06": 73,
                    "2:07": 72,
                    "2:08": 71,
                    "2:09": 70,
                    "2:10": 69,
                    "2:11": 69,
                    "2:12": 69,
                    "2:13": 69,
                    "2:14": 69,
                    "2:15": 69,
                    "2:16": 69,
                    "2:17": 68,
                    "2:18": 68,
                    "2:19": 68,
                    "2:20": 68,
                    "2:21": 68,
                    "2:22": 68,
                    "2:23": 68,
                    "2:24": 67,
                    "2:25": 67,
                    "2:26": 67,
                    "2:27": 67,
                    "2:28": 67,
                    "2:29": 67,
                    "2:30": 67,
                    "2:31": 66,
                    "2:32": 66,
                    "2:33": 66,
                    "2:34": 66,
                    "2:35": 66,
                    "2:36": 66,
                    "2:37": 66,
                    "2:38": 65,
                    "2:39": 65,
                    "2:40": 65,
                    "2:41": 65,
                    "2:42": 65,
                    "2:43": 65,
                    "2:44": 65,
                    "2:45": 65,
                    "2:46": 64,
                    "2:47": 64,
                    "2:48": 64,
                    "2:49": 64,
                    "2:50": 64,
                    "2:51": 64,
                    "2:52": 64,
                    "2:53": 64,
                    "2:54": 64,
                    "2:55": 64,
                    "2:56": 63,
                    "2:57": 63,
                    "2:58": 63,
                    "2:59": 63,
                    "3:00": 63,
                    "3:01": 63,
                    "3:02": 63,
                    "3:03": 63,
                    "3:04": 63,
                    "3:05": 63,
                    "3:06": 62,
                    "3:07": 62,
                    "3:08": 62,
                    "3:09": 62,
                    "3:10": 62,
                    "3:11": 62,
                    "3:12": 62,
                    "3:13": 62,
                    "3:14": 62,
                    "3:15": 62,
                    "3:16": 61,
                    "3:17": 61,
                    "3:18": 61,
                    "3:19": 61,
                    "3:20": 61,
                    "3:21": 61,
                    "3:22": 61,
                    "3:23": 61,
                    "3:24": 61,
                    "3:25": 61,
                    "3:26": 60,
                    "3:27": 60,
                    "3:28": 60,
                    "3:29": 60,
                    "3:30": 60,
                    "3:31": 60,
                    "3:32": 60,
                    "3:33": 60,
                    "3:34": 60,
                    "3:35": 60,
                    "3:36": 59,
                    "3:37": 58,
                    "3:38": 57,
                    "3:39": 56,
                    "3:40": 55,
                    "3:41": 54,
                    "3:42": 53,
                    "3:43": 52,
                    "3:44": 51,
                    "3:45": 50,
                    "3:46": 49,
                    "3:47": 48,
                    "3:48": 47,
                    "3:49": 46,
                    "3:50": 45,
                    "3:51": 44,
                    "3:52": 43,
                    "3:53": 42,
                    "3:54": 41,
                    "3:55": 40,
                    "3:56": 39,
                    "3:57": 38,
                    "3:58": 37,
                    "3:59": 36,
                    "4:00": 35,
                    "4:01": 34,
                    "4:02": 33,
                    "4:03": 32,
                    "4:04": 31,
                    "4:05": 30,
                    "4:06": 29,
                    "4:07": 28,
                    "4:08": 27,
                    "4:09": 26,
                    "4:10": 25,
                    "4:11": 24,
                    "4:12": 23,
                    "4:13": 22,
                    "4:14": 21,
                    "4:15": 20,
                    "4:16": 19,
                    "4:17": 18,
                    "4:18": 17,
                    "4:19": 16,
                    "4:20": 15,
                    "4:21": 14,
                    "4:22": 13,
                    "4:23": 12,
                    "4:24": 11,
                    "4:25": 10,
                    "4:26": 9,
                    "4:27": 8,
                    "4:28": 7,
                    "4:29": 6,
                    "4:30": 5,
                    "4:31": 4,
                    "4:32": 3,
                    "4:33": 2,
                    "4:34": 1,
                    "4:35": 0,
                    "0:00": 0
                },
            },
            items: [
                { label: '1:40', value: '1:40' },
                { label: '1:41', value: '1:41' },
                { label: '1:42', value: '1:42' },
                { label: '1:43', value: '1:43' },
                { label: '1:44', value: '1:44' },
                { label: '1:45', value: '1:45' },
                { label: '1:46', value: '1:46' },
                { label: '1:47', value: '1:47' },
                { label: '1:48', value: '1:48' },
                { label: '1:49', value: '1:49' },
                { label: '1:50', value: '1:50' },
                { label: '1:51', value: '1:51' },
                { label: '1:52', value: '1:52' },
                { label: '1:53', value: '1:53' },
                { label: '1:54', value: '1:54' },
                { label: '1:55', value: '1:55' },
                { label: '1:56', value: '1:56' },
                { label: '1:57', value: '1:57' },
                { label: '1:58', value: '1:58' },
                { label: '1:59', value: '1:59' },
                { label: '2:00', value: '2:00' },
                { label: '2:01', value: '2:01' },
                { label: '2:02', value: '2:02' },
                { label: '2:03', value: '2:03' },
                { label: '2:04', value: '2:04' },
                { label: '2:05', value: '2:05' },
                { label: '2:06', value: '2:06' },
                { label: '2:07', value: '2:07' },
                { label: '2:08', value: '2:08' },
                { label: '2:09', value: '2:09' },
                { label: '2:10', value: '2:10' },
                { label: '2:11', value: '2:11' },
                { label: '2:12', value: '2:12' },
                { label: '2:13', value: '2:13' },
                { label: '2:14', value: '2:14' },
                { label: '2:15', value: '2:15' },
                { label: '2:16', value: '2:16' },
                { label: '2:17', value: '2:17' },
                { label: '2:18', value: '2:18' },
                { label: '2:19', value: '2:19' },
                { label: '2:20', value: '2:20' },
                { label: '2:21', value: '2:21' },
                { label: '2:22', value: '2:22' },
                { label: '2:23', value: '2:23' },
                { label: '2:24', value: '2:24' },
                { label: '2:25', value: '2:25' },
                { label: '2:26', value: '2:26' },
                { label: '2:27', value: '2:27' },
                { label: '2:28', value: '2:28' },
                { label: '2:29', value: '2:29' },
                { label: '2:30', value: '2:30' },
                { label: '2:31', value: '2:31' },
                { label: '2:32', value: '2:32' },
                { label: '2:33', value: '2:33' },
                { label: '2:34', value: '2:34' },
                { label: '2:35', value: '2:35' },
                { label: '2:36', value: '2:36' },
                { label: '2:37', value: '2:37' },
                { label: '2:38', value: '2:38' },
                { label: '2:39', value: '2:39' },
                { label: '2:40', value: '2:40' },
                { label: '2:41', value: '2:41' },
                { label: '2:42', value: '2:42' },
                { label: '2:43', value: '2:43' },
                { label: '2:44', value: '2:44' },
                { label: '2:45', value: '2:45' },
                { label: '2:46', value: '2:46' },
                { label: '2:47', value: '2:47' },
                { label: '2:48', value: '2:48' },
                { label: '2:49', value: '2:49' },
                { label: '2:50', value: '2:50' },
                { label: '2:51', value: '2:51' },
                { label: '2:52', value: '2:52' },
                { label: '2:53', value: '2:53' },
                { label: '2:54', value: '2:54' },
                { label: '2:55', value: '2:55' },
                { label: '2:56', value: '2:56' },
                { label: '2:57', value: '2:57' },
                { label: '2:58', value: '2:58' },
                { label: '2:59', value: '2:59' },
                { label: '3:00', value: '3:00' },
                { label: '3:01', value: '3:01' },
                { label: '3:02', value: '3:02' },
                { label: '3:03', value: '3:03' },
                { label: '3:04', value: '3:04' },
                { label: '3:05', value: '3:05' },
                { label: '3:06', value: '3:06' },
                { label: '3:07', value: '3:07' },
                { label: '3:08', value: '3:08' },
                { label: '3:09', value: '3:09' },
                { label: '3:10', value: '3:10' },
                { label: '3:11', value: '3:11' },
                { label: '3:12', value: '3:12' },
                { label: '3:13', value: '3:13' },
                { label: '3:14', value: '3:14' },
                { label: '3:15', value: '3:15' },
                { label: '3:16', value: '3:16' },
                { label: '3:17', value: '3:17' },
                { label: '3:18', value: '3:18' },
                { label: '3:19', value: '3:19' },
                { label: '3:20', value: '3:20' },
                { label: '3:21', value: '3:21' },
                { label: '3:22', value: '3:22' },
                { label: '3:23', value: '3:23' },
                { label: '3:24', value: '3:24' },
                { label: '3:25', value: '3:25' },
                { label: '3:26', value: '3:26' },
                { label: '3:27', value: '3:27' },
                { label: '3:28', value: '3:28' },
                { label: '3:29', value: '3:29' },
                { label: '3:30', value: '3:30' },
                { label: '3:31', value: '3:31' },
                { label: '3:32', value: '3:32' },
                { label: '3:33', value: '3:33' },
                { label: '3:34', value: '3:34' },
                { label: '3:35', value: '3:35' },
                { label: '3:36', value: '3:36' },
                { label: '3:37', value: '3:37' },
                { label: '3:38', value: '3:38' },
                { label: '3:39', value: '3:39' },
                { label: '3:40', value: '3:40' },
                { label: '3:41', value: '3:41' },
                { label: '3:42', value: '3:42' },
                { label: '3:43', value: '3:43' },
                { label: '3:44', value: '3:44' },
                { label: '3:45', value: '3:45' },
                { label: '3:46', value: '3:46' },
                { label: '3:47', value: '3:47' },
                { label: '3:48', value: '3:48' },
                { label: '3:49', value: '3:49' },
                { label: '3:50', value: '3:50' },
                { label: '3:51', value: '3:51' },
                { label: '3:52', value: '3:52' },
                { label: '3:53', value: '3:53' },
                { label: '3:54', value: '3:54' },
                { label: '3:55', value: '3:55' },
                { label: '3:56', value: '3:56' },
                { label: '3:57', value: '3:57' },
                { label: '3:58', value: '3:58' },
                { label: '3:59', value: '3:59' },
                { label: '4:00', value: '4:00' },
                { label: '4:01', value: '4:01' },
                { label: '4:02', value: '4:02' },
                { label: '4:03', value: '4:03' },
                { label: '4:04', value: '4:04' },
                { label: '4:05', value: '4:05' },
                { label: '4:06', value: '4:06' },
                { label: '4:07', value: '4:07' },
                { label: '4:08', value: '4:08' },
                { label: '4:09', value: '4:09' },
                { label: '4:10', value: '4:10' },
                { label: '4:11', value: '4:11' },
                { label: '4:12', value: '4:12' },
                { label: '4:13', value: '4:13' },
                { label: '4:14', value: '4:14' },
                { label: '4:15', value: '4:15' },
                { label: '4:16', value: '4:16' },
                { label: '4:17', value: '4:17' },
                { label: '4:18', value: '4:18' },
                { label: '4:19', value: '4:19' },
                { label: '4:20', value: '4:20' },
                { label: '4:21', value: '4:21' },
                { label: '4:22', value: '4:22' },
                { label: '4:23', value: '4:23' },
                { label: '4:24', value: '4:24' },
                { label: '4:25', value: '4:25' },
                { label: '4:26', value: '4:26' },
                { label: '4:27', value: '4:27' },
                { label: '4:28', value: '4:28' },
                { label: '4:29', value: '4:29' },
                { label: '4:30', value: '4:30' },
                { label: '4:31', value: '4:31' },
                { label: '4:32', value: '4:32' },
                { label: '4:33', value: '4:33' },
                { label: '4:34', value: '4:34' },
                { label: '4:35', value: '4:35' },
                { label: '0:00', value: '0:00' },
            ]
        };
    }

    getSDCScore(e) {
        let i;
        let sdcScore = this.state.sdcScore;

        i = sdcScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e >= "2:09") {
                    return 'fail';
                } else if (e <= 140) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '2') {
                if (e >= 245) {
                    return 'fail';
                } else if (e <= 140) {
                    return 100;
                } else {
                    return i;
                }
            } else if (this.props.mosLevel === '3') {
                if (e >= "3:35") {
                    return 'fail';
                } else if (e <= "1:40") {
                    return 100;
                } else {
                    return i;
                }
            }
        }
    }

    render() {
        const { onSDCHandler } = this.props;
        if (this.props.mosLevel === '1' || this.props.mosLevel === '2' || this.props.mosLevel === '3') {
            picker = <Picker
                {...this.props}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Time',
                    value: null,
                }}
                items={this.state.items}
                onValueChange={(value) => {
                    onSDCHandler(
                        value,
                        this.getSDCScore((value))
                    );
                }}
                value={this.props.sdcScoreInput}
                selectedValue={this.props.sdcScore}
            />
        } else {
            picker = <Picker
                {...this.props}
                style={pickerSelectStyles}
                placeholder={{
                    label: 'Time',
                    value: null,
                }}
                disabled
                items={this.state.items}
                onValueChange={(value) => {
                    onSDCHandler(
                        value,
                        this.getSDCScore((value))
                    );
                }}
                value={this.props.sdcScoreInput}
                selectedValue={this.props.sdcScore}
            />
        }

        return (
            <View>
                <View style={styles.eventContainer}>
                    <View styles={styles.child1}>
                        <Text style={styles.eventName}>SPRINT-DRAG-CARRY</Text>
                    </View>
                    <View styles={styles.child2}>
                        <View style={styles.runContainer}>
                            <View>
                                {picker}
                            </View>
                        </View>
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>{this.props.sdcScore}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
