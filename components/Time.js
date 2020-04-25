import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            timerReset: false,
            stopwatchReset: false,
            totalDuration: 120000,
        };
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    toggleTimer() {
        this.setState({ timerStart: !this.state.timerStart, timerReset: false });
    }

    resetTimer() {
        this.setState({ timerStart: false, timerReset: true });
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stopwatchContainer}>
                    {/* <Text style={styles.header}>Stopwatch</Text> */}
                    <Stopwatch laps msecs start={this.state.stopwatchStart}
                        reset={this.state.stopwatchReset}
                        options={options}
                        getTime={this.getFormattedTime} />
                    <View style={styles.buttonsRow}>
                        <View style={styles.button1}>
                            <TouchableOpacity style={[this.state.stopwatchStart == true ? styles.buttonStop : styles.buttonStart]} onPress={this.toggleStopwatch}>
                                <TouchableOpacity style={[this.state.stopwatchStart == true ? styles.buttonRing2 : styles.buttonRing]} onPress={this.toggleStopwatch}>
                                    <Text style={styles.buttonText}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button1}>
                            <TouchableOpacity style={styles.buttonReset} onPress={this.resetStopwatch}>
                                <TouchableOpacity style={styles.buttonRing} onPress={this.resetStopwatch}>
                                    <Text style={styles.buttonResetText}>Reset</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.timerContainer}>
                    {/* <Text style={styles.header}>Timer</Text> */}
                    <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
                        reset={this.state.timerReset}
                        options={options}
                        getTime={this.getFormattedTime} />
                    <View style={styles.buttonsRow}>
                        <View style={styles.button1}>
                            <TouchableOpacity style={[this.state.timerStart == true ? styles.buttonStop : styles.buttonStart]} onPress={this.toggleTimer}>
                                <TouchableOpacity style={[this.state.timerStart == true ? styles.buttonRing2 : styles.buttonRing]} onPress={this.toggleTimer}>
                                    <Text style={styles.buttonText}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button1}>
                            <TouchableOpacity style={styles.buttonReset} onPress={this.resetTimer}>
                                <TouchableOpacity style={styles.buttonRing} onPress={this.resetTimer}>
                                    <Text style={styles.buttonResetText}>Reset</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stopwatchContainer: {
        flex: 2,
        width: wp('95%'),
        justifyContent: 'center',
    },
    timerContainer: {
        flex: 2,
        width: wp('95%'),
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        paddingBottom: hp('3%'),
        paddingTop: hp('2%'),
        fontSize: hp('2.5%'),
        textAlign: 'center',
    },
    buttonStart: {
        width: wp('23%'),
        height: hp('10.5%'),
        margin: hp('2%'),
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 2, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#507858',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: hp('50%'),
        borderWidth: 1,
        borderColor: '#507858',
        marginRight: wp('10%')
    },
    buttonStop: {
        width: wp('23%'),
        height: hp('10.5%'),
        margin: hp('2%'),
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 2, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#507858',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: hp('50%'),
        borderWidth: 1,
        borderColor: '#507858',
        marginRight: wp('10%')
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        textAlign: 'center'
    },
    buttonReset: {
        width: wp('23%'),
        height: hp('10.5%'),
        margin: hp('2%'),
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 2, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        backgroundColor: '#ff4c4c',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: hp('50%'),
        borderWidth: 1,
        borderColor: '#ff4c4c',
        marginLeft: wp('10%')
    },
    buttonRing: {
        borderRadius: hp('50%'),
        borderWidth: 3,
        width: wp('21.5%'),
        height: hp('10%'),
        borderColor: '#101010',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonRing2: {
        borderRadius: hp('50%'),
        borderWidth: 3,
        width: wp('21.5%'),
        height: hp('10%'),
        borderColor: '#b2b200',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonResetText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: hp('2%'),
        textAlign: 'center'
    },
    buttonsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
})

const options = {
    container: {
        backgroundColor: '#101010',
        borderRadius: hp('1%'),
        width: wp('95%'),
        height: hp('12%'),
        justifyContent: 'center'
    },
    text: {
        fontSize: hp('10%'),
        letterSpacing: wp('5%'),
        color: '#FFF',
        textAlign: 'center'
    }
};