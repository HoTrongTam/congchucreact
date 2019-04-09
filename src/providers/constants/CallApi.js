import { callLogin } from './ConfigUrl';
import { API_USER } from './Constants.api';
export const apiLogin = (data) =>{
    const params = {
        username: data.username,
        password: data.password,
    }
    return callLogin[API_USER.logIn.method](API_USER.logIn.service + API_USER.logIn.functionUrl,params);
}