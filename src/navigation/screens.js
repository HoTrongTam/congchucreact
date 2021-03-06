import Home from '../screens/trangchu/Home';
import Initializing from '../screens/loading/Initializing';
import Login from '../screens/login/Login';
import AssignList from '../screens/giaoviec/GiaoViecList';
import ContactList from '../screens/danhba/DanhBaList';
import NotifyList from '../screens/thongbao/ThongBaoList';
import Profile from '../screens/profile/Profile';
// import ChiTietDanhBa from '../screens/danhba/chitietdanhba/ChiTietDanhBa';
import DetailRecommend from '../screens/detailRecommend';
export const defineScreen = {
  login:{ name: 'Login', component: Login },
  initial: { name: 'Initializing', component: Initializing },
  assign_list: { name: 'AssignList', component: AssignList },
  contact_list: { name: 'ContactList', component: ContactList },
  notify_list: { name: 'NotifyList', component: NotifyList },
  home: { name: 'Home', component: Home },
  detailsProfile: { name: 'Profile', component: Profile},
  // test: {name: 'TestScreen', component: TestScreen },
  //detailsContact: { name: 'ChiTietDanhBa', component: ChiTietDanhBa},
  detail_rc: { name: 'DetailRecommend', component: DetailRecommend}
}

  
  