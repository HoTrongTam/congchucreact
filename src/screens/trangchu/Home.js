import React from 'react'

import {
  Text,
  View,
  Button,
  StyleSheet,
  AsyncStorage,
  Image,
  TouchableHighlight
} from 'react-native'
import { goToAuth, goLogin } from '../../navigation/root';
import { Navigation } from 'react-native-navigation';
import Header from '../../components/header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import Timeline from 'react-native-timeline-feed';
import { Strings } from '../../utils/LocalString';
import { Color } from '../../utils/LocalColor';
import { ImageRequere } from '../../utils/LocalImage';

const data = [
  {
    'HoTenNguoiHoi': 'NGUYỄN HÙNG SƠN',
    'HoiDapID': 9,
    'NgayTao': '28/03/2019',
    'NoiDungText': 'Xin chân thành cám ơn Chính phủ đã có một kênh lắng nghe và giao tiếp với người dân, doanh nghiệp. Tôi xin trình bày kiến nghị của bản thân về quy định thu phí trích lục hộ tịch tại UBND cấp xã trên cả nước Căn cứ Điều 4 Thông tư số 281/2016/TT-BTC ngày 14/11/2016 của Bộ Tài chính “QUY ĐỊNH MỨC THU, CHẾ ĐỘ THU, NỘP, QUẢN LÝ VÀ SỬ DỤNG PHÍ KHAI THÁC, SỬ DỤNG THÔNG TIN TRONG CƠ SỞ DỮ LIỆU HỘ TỊCH, PHÍ XÁC NHẬN CÓ QUỐC TỊCH VIỆT NAM, PHÍ XÁC NHẬN LÀ NGƯỜI GỐC VIỆT NAM, LỆ PHÍ QUỐC TỊCH” quy định: “Phí khai thác, sử dụng thông tin trong cơ sở dữ liệu hộ tịch là 8.000 đồng/bản sao trích lục/sự kiện hộ tịch đã đăng ký”. Tại Khoản 1, Điều 3 Thông tư 281/2016/TT-BTC quy định tổ chức thu phí, lệ phí “Cục Hộ tịch, Quốc tịch, Chứng thực (Bộ Tư pháp); Cục lãnh sự (Bộ Ngoại giao); Sở Tư pháp các tỉnh, thành phố trực thuộc trung ương; Ủy ban nhân dân cấp huyện; Ủy ban nhân dân cấp xã là tổ chức thu phí khai thác và sử dụng thông tin trong cơ sở dữ liệu hộ tịch” Tại Khoản 2, Điều 4 Luật Hộ tịch năm 2014 quy định “Cơ sở dữ liệu hộ tịch là tập hợp thông tin hộ tịch của cá nhân đã đăng ký và lưu giữ trong Sổ hộ tịch và Cơ sở dữ liệu hộ tịch điện tử” Tại Khoản 3, Điều 4 Luật Hộ tịch 2014 quy định: “Sổ hộ tịch là sổ giấy được lập và lưu giữ tại cơ quan đăng ký hộ tịch để xác nhận hoặc ghi các sự kiện hộ tịch quy định tại Điều 3 của Luật này”. Tại Khoản 1, Điều 3 Luật Hộ tịch 2014 quy định “Xác nhận vào Sổ hộ tịch các sự kiện hộ tịch: a) Khai sinh; b) Kết hôn; c) Giám hộ; d) Nhận cha, mẹ, con; đ) Thay đổi, cải chính hộ tịch, xác định lại dân tộc, bổ sung thông tin hộ tịch; e) Khai tử” Tôi thấy quy định lệ phí thu cấp bản sao trích lục hộ tịch tại UBND cấp xã như vậy là không hợp lý. Trong khi đó tại Quyết định số 299/QĐ-BTP ngày 29/2/2016 của Bộ Tư pháp VỀ VIỆC CÔNG BỐ THỦ TỤC HÀNH CHÍNH BAN HÀNH MỚI TRONG LĨNH VỰC HỘ TỊCH THỰC HIỆN TẠI CƠ QUAN ĐĂNG KÝ HỘ TỊCH TRONG NƯỚC THUỘC PHẠM VI CHỨC NĂNG QUẢN LÝ CỦA BỘ TƯ PHÁP có quy định thủ tục hành chính “cấp bản sao trích lục hộ tịch”, trong đó quy định lệ phí: “- Không quá 3.000 đồng/bản sao đối với yêu cầu cấp bản sao trích lục hộ tịch tại cấp xã; - Không quá 8.000 đồng/bản sao đối với yêu cầu cấp bản sao Trích lục hộ tịch tại cấp huyện. Miễn lệ phí cho người thuộc gia đình có công với cách mạng; người thuộc hộ nghèo; người khuyết tật” Theo tôi quy định về lệ phí tại Quyết định số 299/QĐ-BTP ngày 29/02/2016 là hợp lý vì ở UBND cấp xã đã có sổ gốc lưu trữ về hộ tịch, rất dễ dàng tra cứu và cấp bản sao, chi phí khai thác không cao mà thu phí 8.000 đồng/bản sao là rất cao cho đại đa số người dân trên cả nước trong khi kết quả chỉ là tờ giấy A4 in ấn và có chữ ký, đóng dấu của UBND cấp xã. Mức phí 8.000 đồng chỉ nên thu khi trích lục từ CƠ SỞ DỮ LIỆU HỘ TỊCH ĐIỆN TỬ để bù đắp chi phí xây dựng cơ sở dữ liệu dùng chung cho cả nước và người dân có thể trích lục dữ liệu hộ tịch tại bất kì UBND cấp xã, cấp huyện hoặc Sở Tư pháp ở bất kì tỉnh, thành phố nào trên cả nước vì đã có cơ sở dữ liệu hộ tịch dùng chung cả nước. Kính mong Chính phủ xem xét, yêu cầu Bộ Tài chính sửa đổi Thông tư 281/2016/TT-BTC ngày 14/11/2016 về nội dung lệ phí cấp bản sao trích lục hộ tịch tại UBND cấp xã là không quá 3.000 đồng/bản sao đối với yêu cầu cấp bản sao trích lục hộ tịch như quy định tại Quyết định số 299/QĐ-BTP ngày 29/02/2016 của Bộ Tư pháp. Xin chân thành cảm ơn./.',
    'Ten': 'Chính trị',
    'TenLinhVuc': null,
    'TieuDe': 'Lệ phí cấp bản sao trích lục hộ tịch tại cấp xã',
    'TotalCount': 3
},
{
    'HoTenNguoiHoi': 'Hồ Trọng Tâm',
    'HoiDapID': 6,
    'NgayTao': '28/03/2019',
    'NoiDungText': 'Hiện nay tôi thấy có một số người thường xuyên xả rác tại công viên. Đề nghị nhà chức trách sớm giải quyết các tình trạng trên tránh gây hậu quả nghiêm trọng cho môi trường,  cũng như cho con người. ',
    'Ten': 'Lấn Chiếm',
    'TenLinhVuc': null,
    'TieuDe': 'Phản ánh về tình trạng xã rác công cộng',
    'TotalCount': 3
},
{
    'HoTenNguoiHoi': 'Hồ Trọng Tâm',
    'HoiDapID': 5,
    'NgayTao': '28/03/2019',
    'NoiDungText': 'Tôi muốn hỏi về tại sao container lại thường xuyên vào khu vực thành phố mà kg thấy sự can thiệp của lực lượng chức năng? ',
    'Ten': 'Chính trị',
    'TenLinhVuc': null,
    'TieuDe': 'Phản ánh về nhà đất',
    'TotalCount': 3
}
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  signOut = () => {
    this.props.push({ screen: 'TestScreen', options: {
      bottomTabs: {
        visible: false,
        animate: true,
        drawBehind: true,
      },
      layout: {
        backgroundColor: 'white'
      }
    }});
    // goLogin();
  }
  _keyExtractor = () => `${Math.random()}`;

  render() {
    console.tron.log(this.props);
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
        <Timeline
          keyExtractor={this._keyExtractor}
          data={data}
          circleColor="lightblue"
          lineColor="lightblue"
          lineWidth={2}
        />
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
