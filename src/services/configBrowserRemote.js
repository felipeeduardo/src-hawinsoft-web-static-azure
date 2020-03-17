import axios from 'axios'
import store from '@/store';
import * as types from '@/store/mutation-types'

export const httpBrowserRemote = axios.create({
    baseURL: 'https://hwbotbrowser.azurewebsites.net/api/'
})

//IMTERCEPTORS
httpBrowserRemote.interceptors.request.use(config => {
    store.commit(types.SET_LOADING, true);
    return config;
}, error => {
    store.commit(types.SET_LOADING, false);
    return Promise.reject(error);
});

httpBrowserRemote.interceptors.response.use(response => {
    store.commit(types.SET_LOADING, false);
    return response;
}, error => {
    store.commit(types.SET_LOADING, false);
    return Promise.reject(error);
});

export default httpBrowserRemote;