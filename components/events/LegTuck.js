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
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
  props: {
    source: require('../../assets/lt.jpg')
  }
}]

export default class LegTuck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Min Reps', 'Min Points', 'Max Reps', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['5', '70', '20', '100'],
        ['3', '65', '20', '100'],
        ['1', '60', '20', '100'],
      ],
      ltScoreInput: '',
      legTuckScore: {
        scoreSheet: {
          0: 0,
          1: 60,
          2: 62,
          3: 65,
          4: 68,
          5: 70,
          6: 72,
          7: 74,
          8: 76,
          9: 78,
          10: 80,
          11: 82,
          12: 84,
          13: 86,
          14: 88,
          15: 90,
          16: 92,
          17: 94,
          18: 96,
          19: 98,
          20: 100
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
        { label: '11', value: '11' },
        { label: '12', value: '12' },
        { label: '13', value: '13' },
        { label: '14', value: '14' },
        { label: '15', value: '15' },
        { label: '16', value: '16' },
        { label: '17', value: '17' },
        { label: '18', value: '18' },
        { label: '19', value: '19' },
        { label: '20', value: '20' },
      ],
    };
  }

  getLTScore(e) {
    let i;
    let legTuckScore = this.state.legTuckScore;

    i = legTuckScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 5) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 20) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 3) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 20) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 1) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 20) {
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
        <Text style={{ color: '#507858', fontWeight: 'bold', }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View>
        <Text style={styles.modalTitle}>LEG TUCK (LTK)</Text>
      </View>
      <View>
        <Image
          style={{
            width: wp('80%'),
            height: hp('10%'),
            paddingBottom: hp('2%'),
            resizeMode: 'contain'

          }}
          source={require('../../assets/lt.jpg')}
        />
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}>Complete as many leg tucks as possible; maintain a relative vertical posture while moving the hips and knees up and down without excessive swinging.</Text>
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
    const { onLTHandler } = this.props;

    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.ltScore != 0 &&
        this.props.ltScoreInput != null &&
        (this.props.ltScoreInput == 5 ||
          this.props.ltScoreInput == 3 ||
          this.props.ltScoreInput == 1)
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
              label: this.props.ltScoreInput.toString(),
              value: this.props.ltScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onLTHandler(value, this.getLTScore(value));
            }}
            value={this.props.ltScoreInput}
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
              onLTHandler(value, this.getLTScore(value));
            }}
            value={this.props.ltScoreInput}
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
            onLTHandler(value, this.getLTScore(value));
          }}
          value={this.props.ltScoreInput}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <View>
              {this._renderButton('LEG TUCK', () =>
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
                  this.props.ltScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.ltScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
