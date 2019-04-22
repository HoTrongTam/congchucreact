import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import { Color } from '../../utils/LocalColor';
import { ImageRequere } from '../../utils/LocalImage';
// import { Strings } from '../../utils/LocalString';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Profile extends React.Component {
  backButton = () => {
    this.props.pop();
  }
  renderImageProFile = () => {
    return (
      <View>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={require('../../assets/img/bg.jpg')}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'
              }} />
            <Text style={styles.userNameText}>Hồ Trọng Tâm</Text>
            <View style={styles.userRegencyRow}>
              <Icon name="ios-briefcase" size={25} color={Color.white} />
              <Text style={styles.userRegency}>Nhân viên</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    )
  }
  renderTel = () => {
    return (
      <View style={styles.telContainer}>
        <View style={styles.iconRow}>
          <Icon name="ios-call" size={35} color='#32cd32' />
        </View>
        <View style={styles.telRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>0967999034</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>Điện thoại</Text>
          </View>
        </View>
        <View style={styles.smsRow}>
          <Icon name="md-text" size={35} color='gray' />
        </View>
      </View>
    )
  }
  renderEmail = () => {
    return (
      <View style={styles.emailContainer}>
        <View style={styles.mailRow1}>
          <Icon name="ios-mail" size={35} color='#32cd32' />
        </View>
        <View style={styles.mailRow}>
          <View style={styles.telNumberColumn}>
            <Text style={styles.telNumberText}>Hotrongtam0207@gmail.com</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>Email</Text>
          </View>
        </View>
      </View>
    )
  }
  renderDetails = () => {
    return (
      <View style={styles.detailslContainer}>
        <View style={styles.mailRow1}>
          <Icon name="ios-contacts" size={35} color='#32cd32' />
        </View>
        <View style={styles.mailRow}>
          <View style={styles.detailsNumberColumn}>
            <Text style={styles.telNumberText}>Nam</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>Giới tính</Text>
          </View>
          <View style={styles.detailsNumberColumn1}>
            <Text style={styles.telNumberText}>Egov</Text>
          </View>
          <View style={styles.telNameColumn}>
            <Text style={styles.telNameText}>Phòng ban</Text>
          </View>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderImageProFile()}
        <TouchableHighlight onPress={this.backButton} underlayColor='transparent' style={styles.btnBack}>
          <Image
            style={styles.buttonBack}
            source={ImageRequere.LogoBack}
          />
        </TouchableHighlight>
        {this.renderTel()}
        {this.renderEmail()}
        {this.renderDetails()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBack: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 13,
    left: 13
  },
  buttonBack: {
    width: 30,
    height: 30
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 55,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {

        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  userImage: {
    borderColor: '#01C89E',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: Color.white,
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 2,
    textAlign: 'center',
  },
  userRegencyRow: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userRegency: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 10
  },
  telContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomColor: 'gray',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  telNameColumn: {
    flexDirection: 'row',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailsNumberColumn: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailsNumberColumn1: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingTop: 5
  },
  telNumberText: {
    fontSize: 16,
    color: '#000000',
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  mailRow: {
    flex: 8,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  iconRow: {
    flex: 2,
    alignItems: 'center'
  },
  mailRow1: {
    flex: 2,
    alignItems: 'center'
  },
  emailContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomColor: 'gray',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  detailslContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    borderBottomColor: 'gray',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  }
});
