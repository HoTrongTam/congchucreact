import { Navigation } from 'react-native-navigation';
import Global from '../global';

const push = ({
  componentId,
  screen,
  passProps,
  options
}: {
  componentId: string;
  screen: string;
  passProps?: any;
  options?: Object;
}): Promise<any> => {
  Global.pushComponentName(screen);
  return Navigation.push(componentId, {
    component: {
      name: screen,
      passProps,
      options
    }
  });
};

const pop = ({ componentId }: { componentId: string }): Promise<any> => {
  return Navigation.pop(componentId);
};

const popTo = ({
  componentId,
  options
}: {
  componentId: string;
  options?: Object;
}): Promise<any> => {
  return Navigation.popTo(componentId, options);
};

const popToRoot = ({
  componentId,
  options
}: {
  componentId: string;
  options?: Object;
}): Promise<any> => {
  return Navigation.popToRoot(componentId, options);
};

const showModal = ({
  screen,
  passProps,
  options
}: {
  screen: string;
  passProps?: any;
  options?: any;
}): Promise<any> => {
  return Navigation.showModal({
    component: {
      name: screen,
      passProps,
      options
    }
  });
};

const dismissModal = ({
  componentId,
  options
}: {
  componentId: string;
  options?: any;
}): Promise<any> => {
  return Navigation.dismissModal(componentId, options);
};

const dismissAllModal = ({ options }: { options?: Object }): Promise<any> => {
  return Navigation.dismissAllModals(options);
};

const showOverlay = ({
  screen,
  options,
  passProps
}: {
  screen: string;
  options?: Object;
  passProps?: any;
}): Promise<any> => {
  return Navigation.showOverlay({
    component: {
      name: screen,
      passProps,
      options: {
        overlay: {
          interceptTouchOutside: false
        },
        ...options
      }
    }
  });
};

const dismissOverlay = ({ componentId }: { componentId: string }): Promise<any> => {
  return Navigation.dismissOverlay(componentId);
};

const toggleBottomTabs = ({
  componentId,
  status
}: {
  componentId: string;
  status: boolean;
}): void => {
  return Navigation.mergeOptions(componentId, {
    bottomTabs: {
      visible: status,
      drawBehind: true,
      animate: true
    }
  });
};

const toggleTopBar = ({ componentId, status }: { componentId: string; status: boolean }): void => {
  return Navigation.mergeOptions(componentId, {
    topBar: {
      visible: status,
      drawBehind: true,
      animate: true
    }
  });
};


export {
  push,
  pop,
  popTo,
  popToRoot,
  showModal,
  dismissModal,
  dismissAllModal,
  showOverlay,
  dismissOverlay,
  toggleTopBar,
  toggleBottomTabs,
};
