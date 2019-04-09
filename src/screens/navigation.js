import { Navigation } from 'react-native-navigation';

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
                                text: 'Trang chủ',
                                icon: require('../assets/img/homeicon.png')
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
                                text: 'Giao việc',
                                icon: require('../assets/img/clipboardicon.png')
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
                                text: 'Thông báo',
                                icon: require('../assets/img/notificationicon.png')
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
                                text: 'Danh Bạ',
                                icon: require('../assets/img/user.png')
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
