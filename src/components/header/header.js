import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../utils/LocalColor';
export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={styles.leftImage} source={require('../../assets/img/icon.png')} />
        </View>
        <View style={[styles.center, { flex: this.props.show ? 8 : 9 }]}>
          <Icon style={styles.centerIcon} name="ios-search" size={25} color={Color.white} />
          <TextInput style={styles.centerInput}
            placeholder="Tìm kiếm"
            onChangeText={this.props.onChangeText}
            onSubmitEditing={this.props.onSubmitEdit}
            value={this.props.value}
            placeholderTextColor={Color.white} />
        </View>
        {
          this.props.show ?
            <View style={styles.right}>
              <Icon name="ios-funnel" size={30} color={Color.white} />
            </View>
            : null
        }

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: Color.shadowXanhHeader,
    alignItems: 'center',
    backgroundColor: Color.xanhHeader,
  },
  left: {
    flex: 1,
    paddingLeft: 10
  },
  right: {
    flex: 1
  },
  center: {
    margin: 10,
    flexDirection: 'row',
    backgroundColor: Color.shadowInput,
    borderRadius: 50,
    alignItems: 'center',
  },
  leftImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  centerInput: {
    fontSize: 12,
    height: 35,
    color: Color.white
  },
  centerIcon: {
    paddingLeft: 10
  },
});
