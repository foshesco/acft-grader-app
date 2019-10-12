import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import Picker from 'react-native-picker-select';
import { pickerSelectStyles } from './PickerStyles';

export default class Deadlift extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dlScoreInput: '',
      dlPoints: 0,
      deadliftScore: {
        scoreSheet: {
          139: 59,
          138: 58,
          137: 57,
          136: 56,
          135: 55,
          134: 54,
          133: 53,
          132: 52,
          131: 51,
          130: 50,
          129: 49,
          128: 48,
          127: 47,
          126: 46,
          125: 45,
          124: 44,
          123: 43,
          122: 42,
          121: 41,
          120: 40,
          119: 39,
          118: 38,
          117: 37,
          116: 36,
          115: 35,
          114: 34,
          113: 33,
          112: 32,
          111: 31,
          110: 30,
          109: 29,
          108: 28,
          107: 27,
          106: 26,
          105: 25,
          104: 24,
          103: 23,
          102: 22,
          101: 21,
          100: 20,
          99: 19,
          98: 18,
          97: 17,
          96: 16,
          95: 15,
          94: 14,
          93: 13,
          92: 12,
          91: 11,
          90: 10,
          89: 9,
          88: 8,
          87: 7,
          86: 6,
          85: 5,
          84: 4,
          83: 3,
          82: 2,
          81: 1,
          80: 0,
          140: 60,
          141: 61,
          142: 61,
          143: 61,
          144: 61,
          145: 62,
          146: 62,
          147: 62,
          148: 62,
          149: 62,
          150: 63,
          151: 63,
          152: 63,
          153: 63,
          154: 63,
          155: 64,
          156: 64,
          157: 64,
          158: 64,
          159: 64,
          160: 65,
          161: 66,
          162: 66,
          163: 66,
          164: 66,
          165: 67,
          166: 67,
          167: 67,
          168: 67,
          169: 67,
          170: 68,
          171: 68,
          172: 68,
          173: 68,
          174: 68,
          175: 69,
          176: 69,
          177: 69,
          178: 69,
          179: 69,
          180: 70,
          181: 70,
          182: 70,
          183: 70,
          184: 70,
          185: 71,
          186: 71,
          187: 71,
          188: 71,
          189: 71,
          190: 72,
          191: 72,
          192: 72,
          193: 72,
          194: 72,
          195: 73,
          196: 73,
          197: 73,
          198: 73,
          199: 73,
          200: 74,
          201: 74,
          202: 74,
          203: 74,
          204: 74,
          205: 75,
          206: 75,
          207: 75,
          208: 75,
          209: 75,
          210: 76,
          211: 76,
          212: 76,
          213: 76,
          214: 76,
          215: 77,
          216: 77,
          217: 77,
          218: 77,
          219: 77,
          220: 78,
          221: 78,
          222: 78,
          223: 78,
          224: 78,
          225: 79,
          226: 79,
          227: 79,
          228: 79,
          229: 79,
          230: 80,
          231: 80,
          232: 80,
          233: 80,
          234: 80,
          235: 81,
          236: 81,
          237: 81,
          238: 81,
          239: 81,
          240: 82,
          241: 82,
          242: 82,
          243: 82,
          244: 82,
          245: 83,
          246: 83,
          247: 83,
          248: 83,
          249: 83,
          250: 84,
          251: 84,
          252: 84,
          253: 84,
          254: 84,
          255: 85,
          256: 85,
          257: 85,
          258: 85,
          259: 85,
          260: 86,
          261: 86,
          262: 86,
          263: 86,
          264: 86,
          265: 87,
          266: 87,
          267: 87,
          268: 87,
          269: 87,
          270: 88,
          271: 88,
          272: 88,
          273: 88,
          274: 88,
          275: 89,
          276: 89,
          277: 89,
          278: 89,
          279: 89,
          280: 90,
          281: 90,
          282: 90,
          283: 90,
          284: 90,
          285: 91,
          286: 91,
          287: 91,
          288: 91,
          289: 91,
          290: 92,
          291: 92,
          292: 92,
          293: 92,
          294: 92,
          295: 93,
          296: 93,
          297: 93,
          298: 93,
          299: 93,
          300: 94,
          301: 94,
          302: 94,
          303: 94,
          304: 94,
          305: 95,
          306: 95,
          307: 95,
          308: 95,
          309: 95,
          310: 96,
          311: 96,
          312: 96,
          313: 96,
          314: 96,
          315: 97,
          316: 97,
          317: 97,
          318: 97,
          319: 97,
          320: 98,
          321: 98,
          322: 98,
          323: 98,
          324: 98,
          325: 98,
          326: 98,
          327: 98,
          328: 98,
          329: 98,
          330: 99,
          331: 99,
          332: 99,
          333: 99,
          334: 99,
          335: 99,
          336: 99,
          337: 99,
          338: 99,
          339: 99,
          340: 100
        },
      },
      items: [
        { label: '0', value: '0' },
        { label: '21', value: '21' },
        { label: '339', value: '339' },
        { label: '340', value: '340' },
      ]
    };
  }

  getDLScore(e) {
    let i;
    let deadliftScore = this.state.deadliftScore;

    i = deadliftScore.scoreSheet[e];

    if (e != '') {
      if (this.props.mosLevel === '1') {
        if (e < 180) {
          return <Text style={styles.failed}>fail</Text>;
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '2') {
        if (e < 160) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      } else if (this.props.mosLevel === '3') {
        if (e < 140) {
          return 'fail';
        } else if (e >= 340) {
          return 100;
        } else {
          return i;
        }
      }
    }
  }

  render() {
    const { onDLHandler } = this.props;
    if (this.props.mosLevel === '1' || this.props.mosLevel === '2' || this.props.mosLevel === '3') {
      picker = <Picker
        {...this.props}
        style={pickerSelectStyles}
        placeholder={{
          label: 'Weight',
          value: null,
        }}
        items={this.state.items}
        onValueChange={(value) => {
          onDLHandler(
            value,
            this.getDLScore((value))
          );
        }}
        value={this.props.dlScoreInput}
        selectedValue={this.props.dlScore}
      />
    } else {
      picker = <Picker
        {...this.props}
        style={pickerSelectStyles}
        placeholder={{
          label: 'Weight',
          value: null,
        }}
        disabled
        items={this.state.items}
        onValueChange={(value) => {
          onDLHandler(
            value,
            this.getDLScore((value))
          );
        }}
        value={this.props.dlScoreInput}
        selectedValue={this.props.dlScore}
      />
    }

    return (
      <View>
        <View style={styles.eventContainer}>
          <View styles={styles.child1}>
            <Text style={styles.titleName}>Events</Text>
            <Text style={styles.eventName}>DEADLIFT</Text>
          </View>
          <View styles={styles.child2}>
            <Text style={styles.titleName}>Raw</Text>
            <View>
              {picker}
            </View>
          </View>
          <View styles={styles.child3}>
            <Text style={styles.titleName}>Points</Text>
            <Text style={styles.output}>{this.props.dlScore}</Text>
          </View>
        </View>
      </View>
    );
  }
}