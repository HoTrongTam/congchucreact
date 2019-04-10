import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Header from  '../../components/header/header';
export default class DanhBaList extends React.Component {
    render() {
        return (
            <View>
                <Header/>
                <Text>Trang danh bạ</Text>
            </View>
        )

    }
}
