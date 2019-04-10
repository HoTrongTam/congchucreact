import React from 'react';
import {
    View,
    Text
} from 'react-native';
export default class TestScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: ''
        }
    }
    onChangeText = (text) =>{
        this.setState({keyword: text});
    }
    onSubmit = ()=>{
        alert(this.state.keyword);
    }
    render() {
        return (
            <View>
                <Text>Test screen</Text>
            </View>
        )

    }
}
