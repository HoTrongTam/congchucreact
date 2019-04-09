import React from 'react'

import {
    Text,
    View,
    Button,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { goToAuth,goLogin } from '../navigation'
import { Navigation } from 'react-native-navigation';


export default class Home extends React.Component {
    signOut =()=>{
        goLogin();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Hello from Home screen.</Text>
                <Button
                    onPress={this.signOut}
                    title="Sign Out"
                />
                <Button
                    onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Screen2',
                            }
                        });
                    }}
                    title="View next screen"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
