import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
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

    getSDCScore(e) {
        let i;
        let sdcScore = this.state.sdcScore;

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
        const { onSDCHandler } = this.props;

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
                                keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                onChange={event => {
                                    onSDCHandler(
                                        event.nativeEvent.text,
                                        this.getSDCScore(
                                            this.state.sdcMinInput.concat(event.nativeEvent.text)
                                        )
                                    );
                                }}
                                value={this.props.sdcMinInput}
                            />
                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                    borderTopColor: 'black',
                                    borderTopWidth: 1,
                                }}>
                                <Text style={{ fontSize: 22 }}>:</Text>
                            </View>
                            <TextInput
                                {...this.props}
                                style={styles.input2}
                                ref="input_2"
                                keyboardType="number-pad"
                                autoCorrect={false}
                                maxLength={2}
                                onChange={event => {
                                    onSDCHandler(
                                        this.state.sdcMinInput,
                                        event.nativeEvent.text,
                                        this.getSDCScore(
                                            this.state.sdcMinInput.concat(event.nativeEvent.text)
                                        )
                                    );
                                }}
                                value={this.props.sdcSecInput}
                            />
                        </View>
                    </View>
                    <View styles={styles.child3}>
                        <Text style={styles.output}>{this.props.sdcScore}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
