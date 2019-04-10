import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage
} from 'react-native'

import { goToAuth, goHome, goLogin, goTab } from '../../navigation/root';
import TimerMixin from 'react-timer-mixin';

export default class Intializing extends React.Component {
    componentDidMount() {
        setTimeout(() => {
          goHome();
        }, 1500);

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Loading</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 28
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
