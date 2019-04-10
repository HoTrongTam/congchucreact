import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    ImageBackground
} from 'react-native'
import { connect } from 'react-redux';
import { loginService } from '../../providers/actions/LoginService';
import { goHome } from '../navigation';
import { Strings } from '../../utils/LocalString';
class Login extends React.Component {
    state = {
        username: '',
        password: '',
        showCancel: false,

    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val });
        if (this.state.username == '') {
            this.setState({ showCancel: false });
        } else if (this.state.password == '') {
            this.setState({ showCancel: false });
        } else {
            this.setState({ showCancel: true });
        }
    }
    signIn = () => {
        const params = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.dispatch(loginService(params));
        // goHome();
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/img/business.jpg')} style={styles.background}>
                <View style={styles.login}>
                    <View style={styles.login1}>
                        <Text style={styles.header}>{Strings.DangNhap.toUpperCase()}</Text>
                        <View style={styles.inputRow}>
                            <Text style={styles.lbl1}>{Strings.TenDangNhap}</Text>
                            <TextInput
                                style={styles.txt21}
                                value={this.state.username}
                                onChangeText={val => this.onChangeText('username', val)} />
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.lbl1}>{Strings.MatKhau}</Text>
                            <TextInput
                                style={styles.txt21}
                                value={this.state.password}
                                onChangeText={val => this.onChangeText('password', val)} />
                                {/* <Text style={styles.lbl1}>{this.props.data.rdcLogin.dataString}</Text> */}
                        </View>
                        {this.state.showCancel ? (
                            <TouchableOpacity
                                style={styles.btnSubmit}
                                underlayColor='#4169E1'
                                onPress={this.signIn}>
                                <Text style={styles.txtSubmit}>{Strings.DangNhap.toUpperCase()}</Text>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.toJS()
    }
}
const styles = StyleSheet.create({
    login: {
        backgroundColor: '#fff',
        width: 320,
        borderRadius: 10,
    },
    login1: {
        margin: 15
    },
    btnSubmit: {
        marginTop: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    txtSubmit: {
        color: '#4169E1',
        fontWeight: '100'
    },
    header: {
        marginBottom: 40,
        fontSize: 20,
        fontWeight: 'bold',
    },
    lbl1: {
        marginBottom: 5,
        fontSize: 12,
        color: '#939191'
    },
    inputRow: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 2,
        padding: 5
    },
    txt21: {
        width: '100%',
        padding: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    red: {
        color: 'red',
    },
});
export default connect(mapStateToProps)(Login)