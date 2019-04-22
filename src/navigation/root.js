import { Navigation } from 'react-native-navigation';
import { Strings } from '../utils/LocalString';
import { ImageRequere } from '../utils/LocalImage';
import { defineScreen } from './screens';
export const startApp = () => {
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: defineScreen.initial.name
        }
      },
    });
  });
}
// test
export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: defineScreen.login.name,
            options: {
              bottomTabs: {
                backgroundColor: 'red'
              },
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../assets/img/signIn.png'),
                selectedIconColor: 'red',
                selectedTextColor: 'blue'
              },
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign Up',
                icon: require('../assets/img/signUp.png'),
              }
            }
          },
        },
      ],
    }
  }
});
export const goHome = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          stack: {
            children: [{
              component: {
                name: defineScreen.home.name,
              }
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: Strings.TrangChu,
                icon: ImageRequere.LogoTrangChu,
                selectedIconColor: 'blue',
              },
              topBar: {
                visible: false,
                drawBehind: true
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: defineScreen.assign_list.name,
              }
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: Strings.Giaoviec,
                icon: ImageRequere.LogoGiaoviec
              },
              topBar: {
                visible: false,
                drawBehind: true
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: defineScreen.notify_list.name,
              }
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: Strings.ThongBao,
                icon: ImageRequere.LogoThongBao
              },
              topBar: {
                visible: false,
                drawBehind: true
              }
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                name: defineScreen.contact_list.name,
              }
            }],
            options: {
              bottomTab: {
                fontSize: 12,
                text: Strings.DanhBa,
                icon: ImageRequere.LogoDanhBa
              },
              topBar: {
                visible: false,
                drawBehind: true
              }
            }
          }
        },
      ],
    },
    
  }
});
// export const goGiaoviec = () 
export const goLogin = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'Login',
      children: [
        {
          component: {
            name: defineScreen.login.name,
            options: {
              topBar: {
                visible: false,
                drawBehind: true //Ẩn top bar android, ios non
              }
            }
          }
        }
      ]
    }
  }
})

export const goTab = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          bottomTabs: {
            children: [
              {
                component: {
                  name: defineScreen.home.name,
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      text: Strings.ThongBao,
                      icon: ImageRequere.LogoThongBao
                    },
                    topBar: {
                      visible: false,
                      drawBehind: true
                    }
                  }
                }
              },
              {
                component: {
                  name: defineScreen.assign_list.name,
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      text: Strings.DanhBa,
                      icon: ImageRequere.LogoDanhBa
                    },
                    topBar: {
                      visible: false,
                      drawBehind: true
                    }
                  }
                }
              }
            ]
          }
        }
      ],
      options: {
        animations: {
          push: {
            enabled: 'true',
            content: {
              x: {
                from: 1000,
                to: 0,
                duration: 500,
                interpolation: 'accelerate',
              },
              alpha: {
                from: 0,
                to: 1,
                duration: 500,
                interpolation: 'accelerate'
              }
            },
            topBar: {
              x: {
                from: 1000,
                to: 0,
                duration: 500,
                interpolation: 'accelerate'
              },

            }
          },
          pop: {
            content: {
              x: {
                from: 0,
                to: 1000,
                duration: 500,
                interpolation: 'decelerate',
              },
              alpha: {
                from: 1,
                to: 0,
                duration: 500,
                interpolation: 'decelerate'
              },
            }
          }
        }
      }
    },
  }
})
