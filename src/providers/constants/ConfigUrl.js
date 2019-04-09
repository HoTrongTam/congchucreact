import { create } from 'apisauce'

// define the api
const apiCallLogin = create({
    baseURL: 'http://10.86.222.82:80',
    headers: { Accept: 'application/json' },
})

const apiCallFunc = create({
    baseURL: 'http://10.86.222.82:9001',
    headers: { Accept: 'application/json' },
})

export const callLogin = {
    GET: (url, params, config) => apiCallLogin.get(url, params || {}, config || {}),
    POST: (url, params, config) => apiCallLogin.post(url, params || {}, config || {}),
    DELETE: (url, params, config) => apiCallLogin.delete(url, params || {}, config || {}),
}
export const callFunc = {
    GET: (url, params, config) => apiCallFunc.get(url, params || {}, config || {}),
    POST: (url, params, config) => apiCallFunc.post(url, params || {}, config || {}),
    DELETE: (url, params, config) => apiCallFunc.delete(url, params || {}, config || {}),
}