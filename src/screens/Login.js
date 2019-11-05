import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';

export default class LogIn extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.wrapper}
        >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.LoginHeader}>Login</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

cont styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  scrollView: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    flex: 1,
  },
  LoginHeader: {
    fontSize: 26,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 30
  }
});
