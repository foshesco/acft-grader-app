import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';
import Modal from 'react-native-modal';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Run extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Worst Time', 'Min Points', 'Best Time', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['18:00', '70', '13:30', '100'],
        ['19:00', '65', '13:30', '100'],
        ['21:00', '60', '13:30', '100'],
      ],
      runTotalScore: '',
      runMinInput: '',
      runSecInput: '',
      runScore: {
        scoreSheet: {
          '13:30': 100,
          '13:39': 99,
          '13:48': 98,
          '13:57': 97,
          '14:06': 96,
          '14:15': 95,
          '14:24': 94,
          '14:33': 93,
          '14:42': 92,
          '14:51': 91,
          '15:00': 90,
          '15:09': 89,
          '15:18': 88,
          '15:27': 87,
          '15:36': 86,
          '15:45': 85,
          '15:54': 84,
          '16:03': 83,
          '16:12': 82,
          '16:21': 81,
          '16:30': 80,
          '16:39': 79,
          '16:48': 78,
          '16:57': 77,
          '17:06': 76,
          '17:15': 75,
          '17:24': 74,
          '17:33': 73,
          '17:42': 72,
          '17:51': 71,
          '18:00': 70,
          '18:12': 69,
          '18:24': 68,
          '18:36': 67,
          '18:48': 66,
          '19:00': 65,
          '19:24': 64,
          '19:48': 63,
          '20:12': 62,
          '20:36': 61,
          '21:00': 60,
          '21:01': 59,
          '21:03': 58,
          '21:05': 57,
          '21:07': 56,
          '21:09': 55,
          '21:10': 54,
          '21:12': 53,
          '21:14': 52,
          '21:16': 51,
          '21:18': 50,
          '21:19': 49,
          '21:21': 48,
          '21:23': 47,
          '21:25': 46,
          '21:27': 45,
          '21:28': 44,
          '21:30': 43,
          '21:32': 42,
          '21:34': 41,
          '21:36': 40,
          '21:37': 39,
          '21:39': 38,
          '21:41': 37,
          '21:43': 36,
          '21:45': 35,
          '21:46': 34,
          '21:48': 33,
          '21:50': 32,
          '21:52': 31,
          '21:54': 30,
          '21:55': 29,
          '21:57': 28,
          '21:59': 27,
          '22:01': 26,
          '22:03': 25,
          '22:04': 24,
          '22:06': 23,
          '22:08': 22,
          '22:10': 21,
          '22:12': 20,
          '22:13': 19,
          '22:15': 18,
          '22:17': 17,
          '22:19': 16,
          '22:21': 15,
          '22:22': 14,
          '21:24': 13,
          '21:26': 12,
          '21:28': 11,
          '21:30': 10,
          '21:31': 9,
          '21:33': 8,
          '21:35': 7,
          '21:37': 6,
          '21:39': 5,
          '21:40': 4,
          '21:42': 3,
          '22:44': 2,
          '22:46': 1,
          '22:48': 0,
        },
      },
      items: [
        { label: '22:48', value: '22:48' },
        { label: '22:46', value: '22:46' },
        { label: '22:44', value: '22:44' },
        { label: '22:22', value: '22:22' },
        { label: '22:21', value: '22:21' },
        { label: '22:19', value: '22:19' },
        { label: '22:17', value: '22:17' },
        { label: '22:15', value: '22:15' },
        { label: '22:13', value: '22:13' },
        { label: '22:12', value: '22:12' },
        { label: '22:10', value: '22:10' },
        { label: '22:08', value: '22:08' },
        { label: '22:06', value: '22:06' },
        { label: '22:04', value: '22:04' },
        { label: '22:03', value: '22:03' },
        { label: '22:01', value: '22:01' },
        { label: '21:59', value: '21:59' },
        { label: '21:57', value: '21:57' },
        { label: '21:55', value: '21:55' },
        { label: '21:54', value: '21:54' },
        { label: '21:52', value: '21:52' },
        { label: '21:50', value: '21:50' },
        { label: '21:48', value: '21:48' },
        { label: '21:46', value: '21:46' },
        { label: '21:45', value: '21:45' },
        { label: '21:43', value: '21:43' },
        { label: '21:42', value: '21:42' },
        { label: '21:41', value: '21:41' },
        { label: '21:40', value: '21:40' },
        { label: '21:39', value: '21:39' },
        { label: '21:39', value: '21:39' },
        { label: '21:37', value: '21:37' },
        { label: '21:37', value: '21:37' },
        { label: '21:36', value: '21:36' },
        { label: '21:35', value: '21:35' },
        { label: '21:34', value: '21:34' },
        { label: '21:33', value: '21:33' },
        { label: '21:32', value: '21:32' },
        { label: '21:31', value: '21:31' },
        { label: '21:30', value: '21:30' },
        { label: '21:30', value: '21:30' },
        { label: '21:28', value: '21:28' },
        { label: '21:28', value: '21:28' },
        { label: '21:27', value: '21:27' },
        { label: '21:26', value: '21:26' },
        { label: '21:25', value: '21:25' },
        { label: '21:24', value: '21:24' },
        { label: '21:23', value: '21:23' },
        { label: '21:21', value: '21:21' },
        { label: '21:19', value: '21:19' },
        { label: '21:18', value: '21:18' },
        { label: '21:16', value: '21:16' },
        { label: '21:14', value: '21:14' },
        { label: '21:12', value: '21:12' },
        { label: '21:10', value: '21:10' },
        { label: '21:09', value: '21:09' },
        { label: '21:07', value: '21:07' },
        { label: '21:05', value: '21:05' },
        { label: '21:03', value: '21:03' },
        { label: '21:01', value: '21:01' },
        { label: '21:00', value: '21:00' },
        { label: '20:36', value: '20:36' },
        { label: '20:12', value: '20:12' },
        { label: '19:48', value: '19:48' },
        { label: '19:24', value: '19:24' },
        { label: '19:00', value: '19:00' },
        { label: '18:48', value: '18:48' },
        { label: '18:36', value: '18:36' },
        { label: '18:24', value: '18:24' },
        { label: '18:12', value: '18:12' },
        { label: '18:00', value: '18:00' },
        { label: '17:51', value: '17:51' },
        { label: '17:42', value: '17:42' },
        { label: '17:33', value: '17:33' },
        { label: '17:24', value: '17:24' },
        { label: '17:15', value: '17:15' },
        { label: '17:06', value: '17:06' },
        { label: '16:57', value: '16:57' },
        { label: '16:48', value: '16:48' },
        { label: '16:39', value: '16:39' },
        { label: '16:30', value: '16:30' },
        { label: '16:21', value: '16:21' },
        { label: '16:12', value: '16:12' },
        { label: '16:03', value: '16:03' },
        { label: '15:54', value: '15:54' },
        { label: '15:45', value: '15:45' },
        { label: '15:36', value: '15:36' },
        { label: '15:27', value: '15:27' },
        { label: '15:18', value: '15:18' },
        { label: '15:09', value: '15:09' },
        { label: '15:00', value: '15:00' },
        { label: '14:51', value: '14:51' },
        { label: '14:42', value: '14:42' },
        { label: '14:33', value: '14:33' },
        { label: '14:24', value: '14:24' },
        { label: '14:15', value: '14:15' },
        { label: '14:06', value: '14:06' },
        { label: '13:57', value: '13:57' },
        { label: '13:48', value: '13:48' },
        { label: '13:39', value: '13:39' },
        { label: '13:30', value: '13:30' },
      ],
    };
  }

  getRunScore(e) {
    let i;
    let runScore = this.state.runScore;

    i = runScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e > '18:00') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '12:45') {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e > '19:00') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '12:45') {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e > '21:00') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '12:45') {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={styles.modalEventTitle}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderButtonClose = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.modalButton}>
      <Text style={{color: '#507858', fontWeight: 'bold',}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View>
        <Text style={styles.modalTitle}>TWO-MILE RUN (2MR)</Text>
      </View>
      <View>
        <Image
          style={{
            width: wp('80%'),
            height: hp('10%'),
            paddingBottom: hp('2%'),
            resizeMode: 'contain'

          }}
          source={require('../../../assets/run.png')}
        />
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}> Run two miles for time on a measured, generally flat outdoor course.</Text>
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Min/Max:</Text>
      </View>
      <View style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row data={this.state.tableHead} flexArr={[2, 1, 1, 1]} style={styles.tableHead} textStyle={styles.tableText} />
          <TableWrapper style={styles.tableWrapper}>
            <Col data={this.state.tableTitle} style={styles.tableTitle} heightArr={[hp('5%'), hp('5%')]} textStyle={styles.tableText} />
            <Rows data={this.state.tableData} flexArr={[1, 1]} style={styles.tableRow} textStyle={styles.tableText} />
          </TableWrapper>
        </Table>
      </View>
      {this._renderButtonClose('Close', () => this.setState({ visibleModal: null }))}
    </View>
  );

  render() {
    const { onRunHandler } = this.props;
    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.runScore != 0 &&
        this.props.runScoreInput != null &&
        (this.props.runScoreInput == '18:00' ||
          this.props.runScoreInput == '19:00' ||
          this.props.runScoreInput == '21:00')
      ) {
        var picker = (
          <Picker
            {...this.props}
            style={{
              ...pickerSelectStyles,
              placeholder: {
                color: 'black',
              },
            }}
            placeholder={{
              label: this.props.runScoreInput.toString(),
              value: this.props.runScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onRunHandler(value, this.getRunScore(value));
            }}
            value={this.props.runScoreInput}
          />
        );
      } else {
        picker = (
          <Picker
            {...this.props}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Time',
              value: 0,
            }}
            items={this.state.items}
            onValueChange={value => {
              onRunHandler(value, this.getRunScore(value));
            }}
            value={this.props.runScoreInput}
          />
        );
      }
    } else {
      picker = (
        <Picker
          {...this.props}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Time',
            value: 0,
          }}
          disabled
          items={this.state.items}
          onValueChange={value => {
            onRunHandler(value, this.getRunScore(value));
          }}
          value={this.props.runScoreInput}
          selectedValue={this.props.runScore}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <View>
              {this._renderButton('TWO-MILE RUN', () =>
                this.setState({ visibleModal: 1 })
              )}
              <Modal isVisible={this.state.visibleModal === 1}>
                {this._renderModalContent()}
              </Modal>
            </View>
          </View>
          <View styles={styles.child2}>
            <View style={styles.runContainer}>
              <View>{picker}</View>
            </View>
          </View>
          <View styles={styles.child3}>
            <View style={styles.pointsContainer}>
              <Text
                style={
                  this.props.runScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.runScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
