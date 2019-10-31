import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class PowerThrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ptScoreInput: '',
      powerThrowScore: {
        scoreSheet: {
          4.5: 60,
          4.4: 52,
          4.3: 48,
          4.2: 44,
          4.1: 40,
          4.0: 36,
          3.9: 32,
          3.8: 28,
          3.7: 24,
          3.6: 20,
          3.5: 16,
          3.4: 12,
          3.3: 8,
          3.2: 4,
          3.1: 0,
          4.6: 60,
          4.7: 60,
          4.8: 60,
          4.9: 60,
          5.0: 60,
          5.1: 60,
          5.2: 60,
          5.3: 61,
          5.4: 61,
          5.5: 61,
          5.6: 62,
          5.7: 62,
          5.8: 62,
          5.9: 63,
          6.0: 63,
          6.1: 63,
          6.2: 64,
          6.3: 64,
          6.4: 64,
          6.5: 65,
          6.6: 65,
          6.7: 65,
          6.8: 65,
          6.9: 65,
          7.0: 66,
          7.1: 66,
          7.2: 66,
          7.3: 66,
          7.4: 66,
          7.5: 67,
          7.6: 67,
          7.7: 67,
          7.8: 67,
          7.9: 67,
          8.0: 70,
          8.1: 68,
          8.2: 68,
          8.3: 69,
          8.4: 69,
          8.5: 70,
          8.6: 71,
          8.7: 71,
          8.8: 72,
          8.9: 73,
          9.0: 73,
          9.1: 74,
          9.2: 75,
          9.3: 75,
          9.4: 76,
          9.5: 77,
          9.6: 77,
          9.7: 78,
          9.8: 79,
          9.9: 79,
          10.0: 80,
          10.1: 81,
          10.2: 81,
          10.3: 82,
          10.4: 83,
          10.5: 83,
          10.6: 84,
          10.7: 85,
          10.8: 85,
          10.9: 86,
          11.0: 87,
          11.1: 87,
          11.2: 88,
          11.3: 89,
          11.4: 89,
          11.5: 90,
          11.6: 91,
          11.7: 91,
          11.8: 92,
          11.9: 93,
          12.0: 93,
          12.1: 94,
          12.2: 94,
          12.3: 95,
          12.4: 95,
          12.5: 96,
          12.6: 96,
          12.7: 96,
          12.8: 97,
          12.9: 97,
          13.0: 98,
          13.1: 98,
          13.2: 99,
          13.3: 99,
          13.4: 99,
          13.5: 100,
        },
      },
      items: [
        { label: '3.1', value: '3.1' },
        { label: '3.2', value: '3.2' },
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
        { label: '4.6', value: '4.6' },
        { label: '4.7', value: '4.7' },
        { label: '4.8', value: '4.8' },
        { label: '4.9', value: '4.9' },
        { label: '5.0', value: '5.0' },
        { label: '5.1', value: '5.1' },
        { label: '5.2', value: '5.2' },
        { label: '5.3', value: '5.3' },
        { label: '5.4', value: '5.4' },
        { label: '5.5', value: '5.5' },
        { label: '5.6', value: '5.6' },
        { label: '5.7', value: '5.7' },
        { label: '5.8', value: '5.8' },
        { label: '5.9', value: '5.9' },
        { label: '6.0', value: '6.0' },
        { label: '6.1', value: '6.1' },
        { label: '6.2', value: '6.2' },
        { label: '6.3', value: '6.3' },
        { label: '6.4', value: '6.4' },
        { label: '6.5', value: '6.5' },
        { label: '6.6', value: '6.6' },
        { label: '6.7', value: '6.7' },
        { label: '6.8', value: '6.8' },
        { label: '6.9', value: '6.9' },
        { label: '7.0', value: '7.0' },
        { label: '7.1', value: '7.1' },
        { label: '7.2', value: '7.2' },
        { label: '7.3', value: '7.3' },
        { label: '7.4', value: '7.4' },
        { label: '7.5', value: '7.5' },
        { label: '7.6', value: '7.6' },
        { label: '7.7', value: '7.7' },
        { label: '7.8', value: '7.8' },
        { label: '7.9', value: '7.9' },
        { label: '8.0', value: '8.0' },
        { label: '8.1', value: '8.1' },
        { label: '8.2', value: '8.2' },
        { label: '8.3', value: '8.3' },
        { label: '8.4', value: '8.4' },
        { label: '8.5', value: '8.5' },
        { label: '8.6', value: '8.6' },
        { label: '8.7', value: '8.7' },
        { label: '8.8', value: '8.8' },
        { label: '8.9', value: '8.9' },
        { label: '9.0', value: '9.0' },
        { label: '9.1', value: '9.1' },
        { label: '9.2', value: '9.2' },
        { label: '9.3', value: '9.3' },
        { label: '9.4', value: '9.4' },
        { label: '9.5', value: '9.5' },
        { label: '9.6', value: '9.6' },
        { label: '9.7', value: '9.7' },
        { label: '9.8', value: '9.8' },
        { label: '9.9', value: '9.9' },
        { label: '10.0', value: '10.0' },
        { label: '10.1', value: '10.1' },
        { label: '10.2', value: '10.2' },
        { label: '10.3', value: '10.3' },
        { label: '10.4', value: '10.4' },
        { label: '10.5', value: '10.5' },
        { label: '10.6', value: '10.6' },
        { label: '10.7', value: '10.7' },
        { label: '10.8', value: '10.8' },
        { label: '10.9', value: '10.9' },
        { label: '11.0', value: '11.0' },
        { label: '11.1', value: '11.1' },
        { label: '11.2', value: '11.2' },
        { label: '11.3', value: '11.3' },
        { label: '11.4', value: '11.4' },
        { label: '11.5', value: '11.5' },
        { label: '11.6', value: '11.6' },
        { label: '11.7', value: '11.7' },
        { label: '11.8', value: '11.8' },
        { label: '11.9', value: '11.9' },
        { label: '12.0', value: '12.0' },
        { label: '12.1', value: '12.1' },
        { label: '12.2', value: '12.2' },
        { label: '12.3', value: '12.3' },
        { label: '12.4', value: '12.4' },
        { label: '12.5', value: '12.5' },
        { label: '12.6', value: '12.6' },
        { label: '12.7', value: '12.7' },
        { label: '12.8', value: '12.8' },
        { label: '12.9', value: '12.9' },
        { label: '13.0', value: '13.0' },
        { label: '13.1', value: '13.1' },
        { label: '13.2', value: '13.2' },
        { label: '13.3', value: '13.3' },
        { label: '13.4', value: '13.4' },
        { label: '13.5', value: '13.5' },
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
            <Text style={styles.eventName}>POWER THROW</Text>
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
