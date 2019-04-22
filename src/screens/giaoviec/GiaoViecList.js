import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import Header from '../../components/header/header';
export default class GiaoViecList extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header show />
        <Text>
          Giao việc list
        </Text>
      </View>
    )
  }
}
