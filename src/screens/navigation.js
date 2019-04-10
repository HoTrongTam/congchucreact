import { Navigation } from 'react-native-navigation';
import { Strings } from '../utils/LocalString';
import { ImageRequere } from '../utils/LocalImage';
export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: "SignIn",
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('../assets/img/signIn.png')
                            }
                        }
                    },
                },
                {
                    component: {
                        name: "SignUp",
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign Up',
                                icon: require('../assets/img/signUp.png')
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
                                name: 'Home',
                            }
                        }],
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: Strings.TrangChu,
                                icon: ImageRequere.LogoTrangChu
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
                                name: 'GiaoViecList',
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
                                name: 'ThongBaoList',
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
                                name: 'DanhBaList',
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
        }
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
                        name: 'Login',
                        options:{
                            topBar:{
                                visible:false,
                                drawBehind:true //Ẩn top bar android, ios non
                            }
                        }
                    }
                }
            ]
        }
    }
})
