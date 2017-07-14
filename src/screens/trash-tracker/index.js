/**
 /**
 * GreenUpVermont React Native App
 * https://github.com/johnneed/GreenUpVermont
 * @flow
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'react-native-checkbox';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import NavHeader from '../../components/NavHeader';
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-around',
        backgroundColor: 'white',
        borderColor: 'white',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 30,
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        margin: 10
    },
    options: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
});
export default class TrashTracker extends Component {
    static navigationOptions = {
        drawerLabel: 'Trash Tracker',
        drawerIcon: () => (<MaterialCommunityIcons name='map-marker' size={24} color='green'/>)
    };
    static propTypes = {
        navigation: PropTypes.object
    };

    constructor(props) {
        super(props);
        this._myAwesomeMethod = this._myAwesomeMethod.bind(this);
    }

    componentDidMount() {}

    _myAwesomeMethod() {
        Alert.alert('Huzzah!');
    }

    render() {
        return (
            <View style={styles.container}>
                <NavHeader navigation={this.props.navigation} screenTitle='Trash Tracker' showBack={false}/>
                <Text style={styles.text}>No. Bags:</Text>
            </View>
        );
    }
}