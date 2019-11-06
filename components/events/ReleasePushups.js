import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';
import Modal from 'react-native-modal';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ReleasePushups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Min Reps', 'Min Points', 'Max Reps', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['30', '70', '60', '100'],
        ['20', '65', '60', '100'],
        ['10', '60', '60', '100'],
      ],
      puScoreInput: '',
      puScore: 0,
      pushupScore: {
        scoreSheet: {
          0: 0,
          1: 15,
          2: 20,
          3: 25,
          4: 30,
          5: 35,
          6: 40,
          7: 45,
          8: 50,
          9: 55,
          10: 60,
          12: 61,
          14: 62,
          16: 63,
          18: 64,
          20: 65,
          22: 66,
          24: 67,
          26: 68,
          28: 69,
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
          51: 91,
          52: 92,
          53: 93,
          54: 94,
          55: 95,
          56: 96,
          57: 97,
          58: 98,
          59: 99,
          60: 100,
        },
      },
      items: [
        { label: '0', value: '0' },
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '12', value: '12' },
        { label: '14', value: '14' },
        { label: '16', value: '16' },
        { label: '18', value: '18' },
        { label: '20', value: '20' },
        { label: '22', value: '22' },
        { label: '24', value: '24' },
        { label: '26', value: '26' },
        { label: '28', value: '28' },
        { label: '30', value: '30' },
        { label: '31', value: '31' },
        { label: '32', value: '32' },
        { label: '33', value: '33' },
        { label: '34', value: '34' },
        { label: '35', value: '35' },
        { label: '36', value: '36' },
        { label: '37', value: '37' },
        { label: '38', value: '38' },
        { label: '39', value: '39' },
        { label: '40', value: '40' },
        { label: '41', value: '41' },
        { label: '42', value: '42' },
        { label: '43', value: '43' },
        { label: '44', value: '44' },
        { label: '45', value: '45' },
        { label: '46', value: '46' },
        { label: '47', value: '47' },
        { label: '48', value: '48' },
        { label: '49', value: '49' },
        { label: '50', value: '50' },
        { label: '51', value: '51' },
        { label: '52', value: '52' },
        { label: '53', value: '53' },
        { label: '54', value: '54' },
        { label: '55', value: '55' },
        { label: '56', value: '56' },
        { label: '57', value: '57' },
        { label: '58', value: '58' },
        { label: '59', value: '59' },
        { label: '60', value: '60' },
      ],
    };
  }

  getPUScore(e) {
    let i;
    let pushupScore = this.state.pushupScore;

    i = pushupScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 30) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 70) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 20) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 70) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 10) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 70) {
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
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View>
        <Text style={styles.modalTitle}>HAND RELEASE PUSH-UP - ARM EXTENSION (HRP)</Text>
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}>Complete as many Hand-Release Push-ups as possible in two minutes.</Text>
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Min/Max</Text>
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
    const { onPUHandler } = this.props;

    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.puScore != 0 &&
        this.props.puScoreInput != null &&
        (this.props.puScoreInput == 30 ||
          this.props.puScoreInput == 20 ||
          this.props.puScoreInput == 10)
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
              label: this.props.puScoreInput.toString(),
              value: this.props.puScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onPUHandler(value, this.getPUScore(value));
            }}
            value={this.props.puScoreInput}
          />
        );
      } else {
        picker = (
          <Picker
            {...this.props}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Reps',
              value: 0,
            }}
            items={this.state.items}
            onValueChange={value => {
              onPUHandler(value, this.getPUScore(value));
            }}
            value={this.props.puScoreInput}
          />
        );
      }
    } else {
      picker = (
        <Picker
          {...this.props}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Reps',
            value: 0,
          }}
          disabled
          items={this.state.items}
          onValueChange={value => {
            onPUHandler(value, this.getPUScore(value));
          }}
          value={this.props.puScoreInput}
          selectedValue={this.props.puScore}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <View>
              {this._renderButton('PUSH-UP', () =>
                this.setState({ visibleModal: 1 })
              )}
              <Modal isVisible={this.state.visibleModal === 1}>
                {this._renderModalContent()}
              </Modal>
            </View>
          </View>
          <View styles={styles.child2}>
            <View>{picker}</View>
          </View>
          <View styles={styles.child3}>
            <View style={styles.pointsContainer}>
              <Text
                style={
                  this.props.puScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.puScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
