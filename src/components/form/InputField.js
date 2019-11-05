import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';

export default class InputField extends Component {
  render() {
    const { labelText } = this.props;
    return (
      <View style={styles.wrapper}>
        <Text>{labelText}</Text>
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  }
});
