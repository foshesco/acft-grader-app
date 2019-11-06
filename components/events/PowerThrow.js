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

export default class PowerThrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Min Dist', 'Min Points', 'Max Dist', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['8.0', '70', '12.5', '100'],
        ['6.5', '65', '12.5', '100'],
        ['4.5', '60', '12.5', '100'],
      ],
      ptScoreInput: '',
      powerThrowScore: {
        scoreSheet: {
          3.3: 0,
          3.4: 5,
          3.5: 10,
          3.6: 15,
          3.7: 20,
          3.8: 25,
          3.9: 30,
          4.0: 35,
          4.1: 40,
          4.2: 45,
          4.3: 50,
          4.4: 55,
          4.5: 60,
          4.9: 61,
          5.4: 62,
          5.8: 63,
          6.2: 64,
          6.5: 65,
          6.8: 66,
          7.1: 67,
          7.5: 68,
          7.8: 69,
          8.0: 70,
          8.2: 71,
          8.3: 72,
          8.5: 73,
          8.6: 74,
          8.8: 75,
          8.9: 76,
          9.1: 77,
          9.2: 78,
          9.4: 79,
          9.5: 80,
          9.7: 81,
          9.8: 82,
          10.0: 83,
          10.1: 84,
          10.3: 85,
          10.4: 86,
          10.6: 87,
          10.7: 88,
          10.9: 89,
          11.0: 90,
          11.2: 91,
          11.3: 92,
          11.5: 93,
          11.6: 94,
          11.8: 95,
          11.9: 96,
          12.1: 97,
          12.2: 98,
          12.4: 99,
          12.5: 100,
        },
      },
      items: [
        { label: '3.3', value: '3.3' },
        { label: '3.4', value: '3.4' },
        { label: '3.5', value: '3.5' },
        { label: '3.6', value: '3.6' },
        { label: '3.7', value: '3.7' },
        { label: '3.8', value: '3.8' },
        { label: '3.9', value: '3.9' },
        { label: '4.0', value: '4.0' },
        { label: '4.1', value: '4.1' },
        { label: '4.2', value: '4.2' },
        { label: '4.3', value: '4.3' },
        { label: '4.4', value: '4.4' },
        { label: '4.5', value: '4.5' },
        { label: '4.9', value: '4.9' },
        { label: '5.4', value: '5.4' },
        { label: '5.8', value: '5.8' },
        { label: '6.2', value: '6.2' },
        { label: '6.5', value: '6.5' },
        { label: '6.8', value: '6.8' },
        { label: '7.1', value: '7.1' },
        { label: '7.5', value: '7.5' },
        { label: '7.8', value: '7.8' },
        { label: '8.0', value: '8.0' },
        { label: '8.2', value: '8.2' },
        { label: '8.3', value: '8.3' },
        { label: '8.5', value: '8.5' },
        { label: '8.6', value: '8.6' },
        { label: '8.8', value: '8.8' },
        { label: '8.9', value: '8.9' },
        { label: '9.1', value: '9.1' },
        { label: '9.2', value: '9.2' },
        { label: '9.4', value: '9.4' },
        { label: '9.5', value: '9.5' },
        { label: '9.7', value: '9.7' },
        { label: '9.8', value: '9.8' },
        { label: '10.0', value: '10.0' },
        { label: '10.1', value: '10.1' },
        { label: '10.3', value: '10.3' },
        { label: '10.4', value: '10.4' },
        { label: '10.6', value: '10.6' },
        { label: '10.7', value: '10.7' },
        { label: '10.9', value: '10.9' },
        { label: '11.0', value: '11.0' },
        { label: '11.2', value: '11.2' },
        { label: '11.3', value: '11.3' },
        { label: '11.5', value: '11.5' },
        { label: '11.6', value: '11.6' },
        { label: '11.8', value: '11.8' },
        { label: '11.9', value: '11.9' },
        { label: '12.1', value: '12.1' },
        { label: '12.2', value: '12.2' },
        { label: '12.4', value: '12.4' },
        { label: '12.5', value: '12.5' },
      ],
    };
  }

  getPTScore(e) {
    let i;
    let powerThrowScore = this.state.powerThrowScore;

    i = powerThrowScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 8) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 13.5) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 6.5) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 13.5) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 4.5) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 13.5) {
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
        <Text style={styles.modalTitle}>STANDING POWER THROW (SPT)</Text>
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}>Throw a 10-pound medicine ball backward and overhead for distance.</Text>
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
    const { onPTHandler } = this.props;

    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.ptScore != 0 &&
        this.props.ptScoreInput != null &&
        (this.props.ptScoreInput == 8 ||
          this.props.ptScoreInput == 6.5 ||
          this.props.ptScoreInput == 4.5)
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
              label: this.props.ptScoreInput.toString(),
              value: this.props.ptScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onPTHandler(value, this.getPTScore(value));
            }}
            value={this.props.ptScoreInput}
          />
        );
      } else {
        picker = (
          <Picker
            {...this.props}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Distance',
              value: 0,
            }}
            items={this.state.items}
            onValueChange={value => {
              onPTHandler(value, this.getPTScore(value));
            }}
            value={this.props.ptScoreInput}
          />
        );
      }
    } else {
      picker = (
        <Picker
          {...this.props}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Distance',
            value: 0,
          }}
          disabled
          items={this.state.items}
          onValueChange={value => {
            onPTHandler(value, this.getPTScore(value));
          }}
          value={this.props.ptScoreInput}
          selectedValue={this.props.ptScore}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <View>
              {this._renderButton('POWER THROW', () =>
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
                  this.props.ptScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.ptScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
