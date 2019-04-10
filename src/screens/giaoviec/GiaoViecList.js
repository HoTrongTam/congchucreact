import React from 'react'
import{
    View,
    Text,
    TextInput,
    Button
} from 'react-native'
import Header from  '../../components/header/header';
export default class GiaoViecList extends React.Component{
    render(){
        return(
            <View>
                <Header show/>
                <Text>
                    Giao việc list
                </Text>
            </View>
        )
    }
}