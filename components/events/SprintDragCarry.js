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

export default class SprintDragCarry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Worst Time', 'Min Points', 'Best Time', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['2:10', '70', '1:33', '100'],
        ['2:30', '65', '1:33', '100'],
        ['3:00', '60', '1:33', '100'],
      ],
      sdcTotalScore: '',
      sdcMinInput: '',
      sdcSecInput: '',
      value: '',
      sdcScore: {
        scoreSheet: {
          '1:33': 100,
          '1:36': 99,
          '1:39': 98,
          '1:41': 97,
          '1:43': 96,
          '1:45': 95,
          '1:46': 94,
          '1:47': 93,
          '1:48': 92,
          '1:49': 91,
          '1:50': 90,
          '1:51': 89,
          '1:52': 88,
          '1:53': 87,
          '1:54': 86,
          '1:55': 85,
          '1:56': 84,
          '1:57': 83,
          '1:58': 82,
          '1:59': 81,
          '2:00': 80,
          '2:01': 79,
          '2:02': 78,
          '2:03': 77,
          '2:04': 76,
          '2:05': 75,
          '2:06': 74,
          '2:07': 73,
          '2:08': 72,
          '2:09': 71,
          '2:10': 70,
          '2:14': 69,
          '2:18': 68,
          '2:22': 67,
          '2:26': 66,
          '2:30': 65,
          '2:35': 64,
          '2:40': 63,
          '2:45': 62,
          '2:50': 61,
          '3:00': 60,
          '3:01': 59,
          '3:02': 58,
          '3:03': 57,
          '3:04': 56,
          '3:05': 55,
          '3:06': 54,
          '3:07': 53,
          '3:08': 52,
          '3:09': 51,
          '3:10': 50,
          '3:11': 48,
          '3:12': 46,
          '3:13': 44,
          '3:14': 42,
          '3:15': 40,
          '3:16': 38,
          '3:17': 36,
          '3:18': 34,
          '3:19': 32,
          '3:20': 30,
          '3:21': 28,
          '3:22': 26,
          '3:23': 24,
          '3:24': 22,
          '3:25': 20,
          '3:26': 18,
          '3:27': 16,
          '3:28': 14,
          '3:29': 12,
          '3:30': 10,
          '3:31': 8,
          '3:32': 6,
          '3:33': 4,
          '3:34': 2,
          '3:35': 0,
        },
      },
      items: [
        { label: '3:35', value: '3:35' },
        { label: '3:34', value: '3:34' },
        { label: '3:33', value: '3:33' },
        { label: '3:32', value: '3:32' },
        { label: '3:31', value: '3:31' },
        { label: '3:30', value: '3:30' },
        { label: '3:29', value: '3:29' },
        { label: '3:28', value: '3:28' },
        { label: '3:27', value: '3:27' },
        { label: '3:26', value: '3:26' },
        { label: '3:25', value: '3:25' },
        { label: '3:24', value: '3:24' },
        { label: '3:23', value: '3:23' },
        { label: '3:22', value: '3:22' },
        { label: '3:21', value: '3:21' },
        { label: '3:20', value: '3:20' },
        { label: '3:19', value: '3:19' },
        { label: '3:18', value: '3:18' },
        { label: '3:17', value: '3:17' },
        { label: '3:16', value: '3:16' },
        { label: '3:15', value: '3:15' },
        { label: '3:14', value: '3:14' },
        { label: '3:13', value: '3:13' },
        { label: '3:12', value: '3:12' },
        { label: '3:11', value: '3:11' },
        { label: '3:10', value: '3:10' },
        { label: '3:09', value: '3:09' },
        { label: '3:08', value: '3:08' },
        { label: '3:07', value: '3:07' },
        { label: '3:06', value: '3:06' },
        { label: '3:05', value: '3:05' },
        { label: '3:04', value: '3:04' },
        { label: '3:03', value: '3:03' },
        { label: '3:02', value: '3:02' },
        { label: '3:01', value: '3:01' },
        { label: '3:00', value: '3:00' },
        { label: '2:50', value: '2:50' },
        { label: '2:45', value: '2:45' },
        { label: '2:40', value: '2:40' },
        { label: '2:35', value: '2:35' },
        { label: '2:30', value: '2:30' },
        { label: '2:26', value: '2:26' },
        { label: '2:22', value: '2:22' },
        { label: '2:18', value: '2:18' },
        { label: '2:14', value: '2:14' },
        { label: '2:10', value: '2:10' },
        { label: '2:09', value: '2:09' },
        { label: '2:08', value: '2:08' },
        { label: '2:07', value: '2:07' },
        { label: '2:06', value: '2:06' },
        { label: '2:05', value: '2:05' },
        { label: '2:04', value: '2:04' },
        { label: '2:03', value: '2:03' },
        { label: '2:02', value: '2:02' },
        { label: '2:01', value: '2:01' },
        { label: '2:00', value: '2:00' },
        { label: '1:59', value: '1:59' },
        { label: '1:58', value: '1:58' },
        { label: '1:57', value: '1:57' },
        { label: '1:56', value: '1:56' },
        { label: '1:55', value: '1:55' },
        { label: '1:54', value: '1:54' },
        { label: '1:53', value: '1:53' },
        { label: '1:52', value: '1:52' },
        { label: '1:51', value: '1:51' },
        { label: '1:50', value: '1:50' },
        { label: '1:49', value: '1:49' },
        { label: '1:48', value: '1:48' },
        { label: '1:47', value: '1:47' },
        { label: '1:46', value: '1:46' },
        { label: '1:45', value: '1:45' },
        { label: '1:43', value: '1:43' },
        { label: '1:41', value: '1:41' },
        { label: '1:39', value: '1:39' },
        { label: '1:36', value: '1:36' },
        { label: '1:33', value: '1:33' },
      ],
    };
  }

  getSDCScore(e) {
    let i;
    let sdcScore = this.state.sdcScore;

    i = sdcScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e > '2:10') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '1:33') {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e > '2:30') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '1:33') {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e > '3:00') {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e <= '1:33') {
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
        <Text style={styles.modalTitle}>SPRINT-DRAG-CARRY (S-D-C)</Text>
      </View>
      <View>
        <Image
          style={{
            width: wp('80%'),
            height: hp('10%'),
            paddingBottom: hp('2%'),
            resizeMode: 'contain'

          }}
          source={require('../../assets/sdc.jpg')}
        />
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}>Conduct 5 x 50 meter shuttles for time - sprint, drag, lateral, carry and sprint.</Text>
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
    const { onSDCHandler } = this.props;
    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.sdcScore != 0 &&
        this.props.sdcScoreInput != null &&
        (this.props.sdcScoreInput == '2:10' ||
          this.props.sdcScoreInput == '2:30' ||
          this.props.sdcScoreInput == '3:00')
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
              label: this.props.sdcScoreInput.toString(),
              value: this.props.sdcScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onSDCHandler(value, this.getSDCScore(value));
            }}
            value={this.props.sdcScoreInput}
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
              onSDCHandler(value, this.getSDCScore(value));
            }}
            value={this.props.sdcScoreInput}
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
            onSDCHandler(value, this.getSDCScore(value));
          }}
          value={this.props.sdcScoreInput}
          selectedValue={this.props.sdcScore}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <View>
              {this._renderButton('S-D-C', () =>
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
                  this.props.sdcScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.sdcScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
