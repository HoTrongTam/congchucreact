import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { font } from '../../utils/LocalColor';
export default class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  componentWillUnmount() {

  }

  onChangeText = (text) => {
    this.setState({ keyword: text });
  }
  onSubmit = () => {
    alert(this.state.keyword);
  }
  back = () => {
      this.props.pop({ componentId: this.props.componentId})
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapTitle}>
          <Text numberOfLines={1} style={[styles.marginStyle, styles.title]}>Title</Text>
        </View>
        <Text style={[styles.marginStyle]} onPress={this.back}>Thông tin cá nhân</Text>
        <View style={[styles.colorBg, styles.marginStyle, styles.paddingStyle]}>
          <Text>Người phản ánh kiến nghị</Text>
          <Text>NGUYỄN HÙNG SƠN</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1}}>Điện thoại</Text>
            <Text style={{ flex: 1}}>
              Email {'\n'}
              <Text>acb@gmail.com</Text>
            </Text>
          </View>
        </View>
        <Text style={styles.marginStyle}>Thông tin cá nhân</Text>
        <TouchableOpacity style={[styles.marginStyle, styles.colorBg, styles.paddingStyle]} onPress={this.back} >
          <Text>Lĩnh vực</Text>
          <Text>Chính trị</Text>
          <Text>Nội dung</Text>
          <Text style={styles.colorTextBold}>
            Xin chân thành cám ơn Chính phủ đã có một kênh lắng nghe và giao tiếp với người dân, doanh nghiệp. Tôi xin trình bày kiến nghị của
            bản thân về quy định thu phí trích lục hộ tịch tại UBND cấp xã trên cả nước Căn cứ Điều 4 Thông tư số 28
          </Text>
          <Text>Tệp đính kèm</Text>
        </TouchableOpacity>
      </ScrollView>
    )

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdde1',
  },
  colorBg: {
    backgroundColor: '#fff'
  },
  colorTextBold: {
    color: '#000'
  },
  wrapTitle: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: font.title
  },
  marginStyle: {
    marginHorizontal: 10,
    marginVertical: 5
  },
  paddingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 6
  }
});
