import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Header from  '../../components/header/header';
export default class ThongBaoList extends React.Component {
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
                <Header
                   show={false}
                   value={this.state.keyword}
                   onChangeText={this.onChangeText}
                   onSubmitEdit= {this.onSubmit}/>
                <Text>Trang thong bao</Text>
            </View>
        )

    }
}
