import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = props => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTitle: {
        color: 'black',
        fontSize: 18,
        
    }
});

export default Footer;