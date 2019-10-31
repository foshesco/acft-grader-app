import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class LegTuck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ltScoreInput: '',
      legTuckScore: {
        scoreSheet: {
          20: 100,
          19: 98,
          18: 96,
          17: 94,
          16: 92,
          15: 90,
          14: 88,
          13: 86,
          12: 84,
          11: 82,
          10: 80,
          9: 78,
          8: 76,
          7: 74,
          6: 72,
          5: 70,
          4: 67,
          3: 65,
          2: 63,
          1: 60,
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
            <Text style={styles.eventName}>LEG TUCK</Text>
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
