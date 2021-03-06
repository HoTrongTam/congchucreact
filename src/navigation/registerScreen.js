import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { defineScreen } from './screens';
import HOC from '../hoc';
import stores from '../stores';

export const registerScreens = () => {
  Navigation.registerComponentWithRedux(defineScreen.home.name, () => HOC(defineScreen.home.component),  Provider, stores),
  Navigation.registerComponent(defineScreen.initial.name, () => HOC(defineScreen.initial.component)),
  Navigation.registerComponentWithRedux(defineScreen.login.name, () => HOC(defineScreen.login.component), Provider, stores),
  Navigation.registerComponent(defineScreen.assign_list.name, () => HOC(defineScreen.assign_list.component)),
  Navigation.registerComponent(defineScreen.contact_list.name, () => HOC(defineScreen.contact_list.component)),
  Navigation.registerComponent(defineScreen.notify_list.name, () => HOC(defineScreen.notify_list.component)),
  Navigation.registerComponent(defineScreen.detailsProfile.name, ()=> HOC(defineScreen.detailsProfile.component)),
  // Navigation.registerComponent(defineScreen.detailsContact.name, ()=> HOC(defineScreen.detailsContact.component)),
  Navigation.registerComponentWithRedux(defineScreen.detail_rc.name, () => HOC(defineScreen.detail_rc.component),Provider, stores)
}
