
export const API_USER = {
    'logIn': {
        functionUrl: 'Login',
        service: '/DesktopModules/MobileServiceDnn/API/ServiceMobile/',
        method: 'POST'
    },
    'getInfo': {
        functionUrl: 'Mobile_CANBO_GetById',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'readFile': {
        functionUrl: 'MasterDownLoadFile.rest',
        service: '/MasterMobileServices-1.0/rest/Master/action/post/',
        method: 'POST'
    },
    'saveavatar': {
        functionUrl: 'Mobile_saveFileImage',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'doiMatKhau': {
        functionUrl: 'ChangePassword',
        service: '/DesktopModules/MobileServiceDnn/API/ServiceMobile/',
        method: 'POST'
        // screenname
        // password
    },
    //fire base xử lý công việc
    'registerFireBaseXLCV': {
        functionUrl: 'Mobile_UpdateInfoFireBase',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'sendFireBaseXLCV': {
        functionUrl: 'Mobile_SendInfoFireBase_ByUserID',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'recommend': {
      functionUrl: 'Mobile_TK_PHANANHKIENNGHI_GetDanhSachPhanAnh_ListBasic',
      service: '/HanhChinhService.svc/HC/',
      method: 'GET'
    }
}
