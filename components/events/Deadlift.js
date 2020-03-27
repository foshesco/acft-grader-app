import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  WebView,
  Image
} from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';
import Modal from 'react-native-modal';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Emoji from 'react-native-emoji';
import Ads from './Ads';

export default class Deadlift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleModal: false,
      tableHead: ['', 'Min Weight', 'Min Points', 'Max Weight', 'Max Points',],
      tableTitle: ['Heavy', 'Significant', 'Moderate'],
      tableData: [
        ['200', '70', '340', '100'],
        ['180', '65', '340', '100'],
        ['140', '60', '340', '100'],
      ],
      dlScoreInput: '',
      deadliftScore: {
        scoreSheet: {
          80: 0,
          90: 10,
          100: 20,
          110: 30,
          120: 40,
          130: 50,
          140: 60,
          150: 62,
          160: 63,
          170: 64,
          180: 65,
          190: 68,
          200: 70,
          210: 72,
          220: 74,
          230: 76,
          240: 78,
          250: 80,
          260: 82,
          270: 84,
          280: 86,
          290: 88,
          300: 90,
          310: 92,
          320: 94,
          330: 97,
          340: 100
        },
      },
      items: [
        { label: '80', value: '80' },
        { label: '90', value: '90' },
        { label: '100', value: '100' },
        { label: '110', value: '110' },
        { label: '120', value: '120' },
        { label: '130', value: '130' },
        { label: '140', value: '140' },
        { label: '150', value: '150' },
        { label: '160', value: '160' },
        { label: '170', value: '170' },
        { label: '180', value: '180' },
        { label: '190', value: '190' },
        { label: '200', value: '200' },
        { label: '210', value: '210' },
        { label: '220', value: '220' },
        { label: '230', value: '230' },
        { label: '240', value: '240' },
        { label: '250', value: '250' },
        { label: '260', value: '260' },
        { label: '270', value: '270' },
        { label: '280', value: '280' },
        { label: '290', value: '290' },
        { label: '300', value: '300' },
        { label: '310', value: '310' },
        { label: '320', value: '320' },
        { label: '330', value: '330' },
        { label: '340', value: '340' },
      ],
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  getDLScore(e) {
    let i;
    let deadliftScore = this.state.deadliftScore;

    i = deadliftScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 200) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 180) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 140) {
          return <Text style={styles.failed}>FAIL</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  ShowModalFunction(visible) {
    this.setState({ isModelVisible: false });
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
        <Text style={styles.modalTitle}>3 REPETITION MAXIMUM DEADLIFT (MDL)</Text>
      </View>
      <View>
        <Image
          style={{
            width: wp('80%'),
            height: hp('10%'),
            paddingBottom: hp('2%'),
            resizeMode: 'contain'

          }}
          source={require('../../assets/dl.jpg')}
        />
      </View>
      <View>
        <Text style={styles.modalTitleSummary}>Objective:</Text>
      </View>
      <View>
        <Text style={styles.modalSummary}>Deadlift the maximum weight possible three times.</Text>
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
    const { onDLHandler } = this.props;
    if (
      this.props.mosLevel === '1' ||
      this.props.mosLevel === '2' ||
      this.props.mosLevel === '3'
    ) {
      if (
        this.props.dlScore != 0 &&
        this.props.dlScoreInput != null &&
        (this.props.dlScoreInput == 200 ||
          this.props.dlScoreInput == 180 ||
          this.props.dlScoreInput == 140)
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
              label: this.props.dlScoreInput.toString(),
              value: this.props.dlScoreInput,
              color: 'black',
            }}
            items={this.state.items}
            onValueChange={value => {
              onDLHandler(value, this.getDLScore(value));
            }}
            value={this.props.dlScoreInput}
          />
        );
      } else {
        picker = (
          <Picker
            {...this.props}
            style={pickerSelectStyles}
            placeholder={{
              label: 'Weight',
              value: 0,
            }}
            items={this.state.items}
            onValueChange={value => {
              onDLHandler(value, this.getDLScore(value));
            }}
            value={this.props.dlScoreInput}
          />
        );
      }
    } else {
      picker = (
        <Picker
          {...this.props}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Weight',
            value: 0,
          }}
          disabled
          items={this.state.items}
          onValueChange={value => {
            onDLHandler(value, this.getDLScore(value));
          }}
          value={this.props.dlScoreInput}
        />
      );
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <Text style={styles.titleName}>Events</Text>
            <View>
              {this._renderButton('DEADLIFT', () =>
                this.setState({ visibleModal: 1 })
              )}
              <Modal isVisible={this.state.visibleModal === 1}>
                {this._renderModalContent()}
              </Modal>
            </View>
          </View>
          <View styles={styles.child2}>
            <Text style={styles.titleName}>Raw</Text>
            <View>{picker}</View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.titleName}>Points</Text>
            <View style={styles.pointsContainer}>
              <Text
                style={
                  this.props.dlScore < 1 ? styles.initialScore : styles.output
                }>
                {this.props.dlScore}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
