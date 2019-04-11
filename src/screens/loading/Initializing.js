import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import { goToAuth, goLogin, goTab, goHome } from '../../navigation/root';

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
