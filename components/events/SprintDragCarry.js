import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import { styles } from './Styles';

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
                    140: 100,
                    141: 98,
                    142: 97,
                    143: 96,
                    144: 95,
                    145: 94,
                    146: 93,
                    147: 92,
                },
            },
        };
    }

    getSDCScore() {
        let i;
        let sdcScore = this.state.sdcScore;
        e = this.state.sdcMinInput.concat(this.state.sdcSecInput)

        console.log("this.state.sdcMinInput", this.state.sdcMinInput)
        console.log("e", e)

        i = sdcScore.scoreSheet[e];

        if (e != '') {
            if (this.props.mosLevel === '1') {
                if (e >= 209) {
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
                if (e >= 335) {
                    return 'fail';
                } else if (e <= 140) {
                    return 100;
                } else {
                    return i;
                }
            }
        }
    }

    render() {
        return (
            <View>
                <View style={styles.eventContainer}>
                    <View styles={styles.child1}>
                        <Text style={styles.eventName}>SPRINT-DRAG-CARRY</Text>
                    </View>
                    <View styles={styles.child2}>
                        <View style={styles.runContainer}>
                            <TextInput
                                onChangeText={sdcMinInput => this.setState({ sdcMinInput })}
                                style={styles.input1}
                                keyboardType='decimal-pad'
                                maxLength={1}
                                autoCorrect={false}
                                value={this.state.value}
                                onChangeText={value => {
                                    this.setState({ value })
                                    if (value) this.refs.input_2.focus(); //assumption is TextInput ref is input_2
                                }}
                            />
                            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, borderTopColor: 'black', borderTopWidth: 1 }}>
                                <Text style={{ fontSize: 22 }}>:</Text>
                            </View>
                            <TextInput
                                onChangeText={sdcSecInput => this.setState({ sdcSecInput })}
                                style={styles.input2}
                                ref="input_2"
                                keyboardType='decimal-pad'
                                maxLength={2}
                                autoCorrect={false}
                                value={this.state.sdcSecInput}
                            />
                        </View >
                    </View>
                    <View styles={styles.child3}>

                        <Text style={styles.output}>
                            {this.getSDCScore()}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const PowerThrow2 = props => {
    return (
        <View style={styles.runContainer}>
            <TextInput
                style={styles.input1}
                keyboardType='decimal-pad'
                maxLength={1}
                autoCorrect={false}
                onChangeText={sdcMinInput => props.minInput(sdcMinInput)}
                value={props.sdcMinInput}
                onChangeText={value => {
                    this.setState({ value })
                    if (value) this.refs.input_2.focus(); //assumption is TextInput ref is input_2
                }}
            />
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, borderTopColor: 'black', borderTopWidth: 1 }}>
                <Text style={{ fontSize: 22 }}>:</Text>
            </View>
            <TextInput
                style={styles.input2}
                ref="input_2"
                keyboardType='decimal-pad'
                maxLength={2}
                autoCorrect={false}
                onChangeText={sdcSecInput => props.secInput(sdcSecInput)}
                value={props.sdcSecInput}
            />
        </View >
    );
};