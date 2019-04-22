import React from 'react';
import { BackHandler, Keyboard } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Global from '../global';
import * as navigation from '../navigation/navigate';
// import { defineScreen } from '../navigation/screens';

interface WrappedProps extends React.Props<any> {
  push?: Function;
  pop?: Function;
  showModal?: Function;
  dismissModal?: Function;
  dismissAllModal?: Function;

  componentId: string;
}

const Wrapper = Screen => {
  class WrappedScreen extends React.Component<WrappedProps> {
    static options() {
      const options =
        Screen.options && typeof Screen.options === 'function' ? Screen.options() : {};

      const mergeOptions = {
        ...options
      };

      return mergeOptions;
    }

    constructor(props) {
      super(props);
      Navigation.events().bindComponent(this);
    }

    navigationButtonPressed({ buttonId }) {
      alert(buttonId);
    }

    componentDidAppear() {
      Global.setComponentId(this.props.componentId);
      // console.warn('current component: ', this.props.componentId);
    }

    componentDidDisappear() {
      Keyboard.dismiss();
    }

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      Global.popComponentName();
    }

    handleBackPress = () => {
      this.pop();
      return true;
    };

    push = ({
      componentId = this.props.componentId,
      screen,
      passProps,
      options
    }): Promise<any> | undefined => {
      if (screen !== Global.getLatestComponentName()) {
        return navigation.push({
          componentId,
          screen,
          passProps,
          options
        });
      }
    };



    pop = (): Promise<any> => {
      return navigation.pop({ componentId: this.props.componentId });
    };

    popTo = (options): Promise<any> => {
      return navigation.popTo({ componentId: this.props.componentId, options });
    };

    popToRoot = ({ options }): Promise<any> => {
      return navigation.popToRoot({ componentId: this.props.componentId, options });
    };

    showModal = ({ screen, passProps, options }): Promise<any> => {
      return navigation.showModal({ screen, passProps, options });
    };

    dismissModal = ({ componentId, options }): Promise<any> => {
      return navigation.dismissModal({ componentId, options });
    };

    dismissAllModal = ({ options }): Promise<any> => {
      return navigation.dismissAllModal({ options });
    };

    showOverlay = ({ screen, passProps, options }): Promise<any> => {
      return navigation.showOverlay({ screen, options, passProps });
    };

    dismissOverlay = ({ componentId }): Promise<any> => {
      return navigation.dismissOverlay({ componentId });
    };

    toggleBottomTabs = ({ componentId, status }): void => {
      return navigation.toggleBottomTabs({ componentId, status });
    };

    toggleTopBar = ({ componentId, status }): void => {
      return navigation.toggleTopBar({ componentId, status });
    };

    // alert = (params: any) => {
    //   return navigation.showOverlay({ screen: defineScreen.alert.name, passProps: params });
    // };

    render() {
      return (
          <Screen
            {...this.props}
            push={this.push}
            pop={this.pop}
            popTo={this.popTo}
            popToRoot={this.popToRoot}
            showModal={this.showModal}
            dismissModal={this.dismissModal}
            dismissAllModal={this.dismissAllModal}
            showOverlay={this.showOverlay}
            dismissOverlay={this.dismissOverlay}
            toggleBottomTabs={this.toggleBottomTabs}
            toggleTopBar={this.toggleTopBar}
            // alert={this.alert}
          />
      );
    }
  }

  return WrappedScreen;
};

export default Wrapper;
