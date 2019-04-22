import React from 'react';
import { goLogin } from '../../navigation/root';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';
import { connect } from 'react-redux';
import Timeline from 'react-native-timeline-feed';
import { Navigation } from 'react-native-navigation';
import { rcAction } from '../../providers/actions/recommendAction';
import { selectors } from '../../selectors';
import { Strings } from '../../utils/LocalString';
import { Color } from '../../utils/LocalColor';
import { ImageRequere } from '../../utils/LocalImage';
import Loading from '../../components/loading';
import { defineScreen } from '../../navigation/screens';
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const obj = {
      tinhTrang: 1,
      pageIndex: 1,
      pageSize: 20,
      tuKhoa: '',
      CongKhai: 0
    };

    this.props.getDataRc(obj);
  }

  signOut = async () => {
    // goLogin();s
    const url = 'com.examplemaps://';
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }
  _keyExtractor = () => `${Math.random()}`;

  onEventPress = async (event) => {
    try {
    await this.props.push({
      screen: defineScreen.detail_rc.name, options: {
        bottomTabs: {
          visible: false,
          animate: true,
          drawBehind: true,
        },
        // topBar: {
        //   visible: true,
        //   drawBehind: false,
        //   background: {
        //     color: '#3a5997',
        //     translucent: false
        //   },
        //   title: {
        //     text: 'abcd',
        //     alignment: 'center',
        //     color: '#fff'
        //   },
        //   backButton: {
        //     color: '#fff',
        //   },
        // },
        layout: {
          backgroundColor: 'white'
        }
      }
    });
  }
  catch (err) {
    console.tron.log(err);
  }
  }
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: '#4267b2' }}>
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
            <TouchableOpacity onPress={this.signOut}>
              <Image
                style={styles.buttonLogout}
                source={ImageRequere.LogoLogout}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
        <Timeline
          keyExtractor={this._keyExtractor}
          data={this.props.data}
          circleColor="lightblue"
          lineColor="lightblue"
          lineWidth={2}
          onEventPress={this.onEventPress}
          ListFooterComponent={() => <Loading loading={this.props.loading} />}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  data: selectors.getDataRc(state),
  loading: selectors.getLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  getDataRc: (obj) => dispatch(rcAction(obj))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

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
