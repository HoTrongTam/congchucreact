import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native'
import { goLogin } from '../../navigation/root';
import { Strings } from '../../utils/LocalString';
import { Color } from '../../utils/LocalColor';
import { ImageRequere } from '../../utils/LocalImage';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    signOut = () => {
        goLogin();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <View style={styles.leftHeader}>
                        <Image style={styles.leftImageHeader} source={ImageRequere.LogoHeader} />
                    </View>
                    <View style={styles.centerHeader}>
                        <Text style={styles.centerHeaderText}>{Strings.TenApp}
                            <Text style={styles.centerHeaderText2}>
                                {'\n'}{Strings.TenCongTy}
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <TouchableHighlight onPress={this.signOut}>
                            <Image
                                style={styles.buttonLogout}
                                source={ImageRequere.LogoLogout}
                            />
                        </TouchableHighlight>
                        {/* <Icon name="ios-log-out" size={30} color="#ffffff" /> */}
                    </View>
                </View>
                {/* <Text>Hello from Home screen.</Text>
                <Button
                    onPress={() => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'Screen2',
                            }
                        });
                    }}
                    title="View next screen"
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        flexDirection: 'row',
        shadowColor: ' 0 0 20px 0px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
        backgroundColor: '#4267b2',
    },
    leftHeader: {
        flex: 1,
        paddingLeft: 10
    },
    rightHeader: {
        flex: 1
    },
    centerHeader: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 15
    },
    centerHeaderText: {
        fontSize: 15,
        color: Color.white
    },
    centerHeaderText2: {
        fontSize: 15,
        color: '#dcdcdc',
        opacity: 0.5
    },
    leftImageHeader: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    buttonLogout: {
        width: 25,
        height: 25
    }
});
