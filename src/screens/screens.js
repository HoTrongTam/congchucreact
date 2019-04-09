import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import stores from '../stores';
export function registerScreens() {
    Navigation.registerComponent('Home', () => require('./trangchu/Home').default);
    Navigation.registerComponent('Initializing', (sc) => require('./loading/Initializing').default);
    Navigation.registerComponentWithRedux('Login', () => require('./login/Login').default, Provider, stores);
    Navigation.registerComponent('GiaoViecList',()=> require('../screens/giaoviec/GiaoViecList').default);
    Navigation.registerComponent('DanhBaList',()=> require('./danhba/DanhBaList').default);
    Navigation.registerComponent('ThongBaoList',()=> require('./thongbao/ThongBaoList').default);
  }
  