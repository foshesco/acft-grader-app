import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const Deadlift = props => {
  return (
    <View>
      <Text style={styles.eventName}>Deadlift</Text>
      <TextInput
        style={styles.input}
        maxLength={3}
        autoCorrect={false}
        onChangeText={dlScoreInput => props.textChange(dlScoreInput)}
        value={props.dlScoreInput}
        onKeyPress={props.getDLScore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: 100,
    height: 50,
  },
  eventName: {
    fontSize: 24,
  },
});

export default Deadlift;
