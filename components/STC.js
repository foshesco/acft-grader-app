import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Rows, Cell, Col } from 'react-native-table-component';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

export default class ExampleFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleModal: false,
            status: 'Incomplete',
            tableHead: ['Exercise Station', 'Kettlebells/Weights', 'Climbing Bars', 'Completed'],
            tableData: [
                ['1. Sumo Squat', '6 X 50lbs', 'N/A', 'x'],
                ['2. Straight-leg Deadlift', '12 X 40lbs', 'N/A', 'x'],
                ['3. Forward Lunge', '12 X 20lbs', 'N/A', 'x'],
                ['4. 8-Count Step-up', '12 X 30lbs', 'N/A', 'x'],
                ['5. Pull-up', 'N/A', '6', 'x'],
                ['6. Supine Chest Press', '12 X 40lbs', 'N/A', 'x'],
                ['7. Bent-over Row', '12 X 20lbs', 'N/A', 'x'],
                ['8. Overhead Push Press', '12 X 30lbs', 'N/A', 'x'],
                ['9. Supine Body Twist', '6 X 25lbs', 'N/A', 'x'],
                ['10. Leg Tuck', 'N/A', '6', 'x'],
            ]
        }
    }

    _alertIndex() {
        if (this.state.status === 'Incomplete') {
            this.setState({ status: 'Complete' })
        } else if (this.state.status === 'Complete') {
            this.setState({ status: 'Incomplete' })
        }
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    ShowModalFunction(visible) {
        this.setState({ isModelVisible: false });
    }

    _renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text style={styles.modalTitle}>{text}</Text>
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
                <Image
                    style={{
                        width: wp('85%'),
                        height: hp('30%'),
                        resizeMode: 'contain'

                    }}
                    source={require('./stc.jpg')}
                />
            </View>
            {this._renderButtonClose('Close', () => this.setState({ visibleModal: null }))}
        </View>
    );

    render() {
        const state = this.state;
        const element = (data, index) => (
            <TouchableOpacity onPress={() => this._alertIndex()}>
                <View style={styles.btn}>
                    <Text style={styles.btnText}>{this.state.status}</Text>
                </View>
            </TouchableOpacity>
        );

        return (
            <View style={styles.container}>
                <View style={styles.tableContainer}>
                    <Table borderStyle={{ borderColor: 'transparent' }}>
                        <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                        {
                            state.tableData.map((rowData, index) => (
                                <TableWrapper key={index} style={styles.row}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                        ))
                                    }
                                </TableWrapper>
                            ))
                        }
                    </Table>
                </View>
                <View>
                    <Text style={styles.bottomText}>If a track & field is available, see optimal </Text>
                    {this._renderButton('layout', () =>
                        this.setState({ visibleModal: 1 })
                    )}
                    <Modal isVisible={this.state.visibleModal === 1}>
                        {this._renderModalContent()}
                    </Modal>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tableContainer: {},
    head: {
        height: hp('7%'),
        backgroundColor: '#808B97'
    },
    text: {
        margin: 6
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#FFF1C1'
    },
    btn: {
        width: 58,
        height: 18,
        backgroundColor: '#78B7BB',
        borderRadius: 2
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    },
    bottomText: {
        fontSize: hp('2%')
    },
    modalTitle: {
        fontSize: hp('2%'),
        color: 'blue'
    },
    modalContent: {
        height: hp('60%'),
        backgroundColor: 'white',
        justifyContent: 'space-around',
        padding: hp('2%'),
        paddingBottom: hp('1%'),
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalButton: {
        padding: hp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#507858',
        width: wp('30%'),
        fontSize: hp('1.7%'),
        alignSelf: 'center',
    },
});