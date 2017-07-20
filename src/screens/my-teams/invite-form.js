/**
 * GreenUpVermont React Native App
 * https://github.com/johnneed/GreenUpVermont
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as teamActions from './team-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: '100%'
    },
    teams: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
export default class InviteForm extends Component {
    static propTypes = {
        actions: PropTypes.object,
        teams: PropTypes.array
    };

    static navigationOptions = {
        title: 'Invite Team Members'
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Email
                </Text>
                <TextInput style={styles.textinput}
                    placeholder='Type email here'
                />
                <Text style={styles.text}>
                    Name
                </Text>
                <TextInput style={styles.textinput}
                    placeholder='Type name here'
                />
                <Text style={styles.text}>
                    Phone (optional)
                </Text>
                <TextInput style={styles.textinput}
                    placeholder='Type phone here'
                />
                <Button title = 'Invite to Group'/>
            </View>
        );
    }
}
