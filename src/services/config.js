import axios from 'axios'
import store from '@/store';
import * as types from '@/store/mutation-types'

export const http = axios.create({
    baseURL: 'https://hawinsoft.azurewebsites.net/api/'
})

//IMTERCEPTORS
http.interceptors.request.use(config => {
    var load_play_rpa = config.url;
    var set_play_rpa = load_play_rpa.substring(0, 18)
    //LOAD PLAY RPA
    if (set_play_rpa == "rpa_browser_remote") {
        store.commit(types.SET_LOADING_PLAY_RPA, true);
    } else {
        store.commit(types.SET_LOADING, true);
    }
    return config;
}, error => {
    store.commit(types.SET_LOADING, false);
    store.commit(types.SET_LOADING_PLAY_RPA, false);
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    var load_play_rpa = response.config.url.replace(response.config.baseURL, "");
    var set_play_rpa = load_play_rpa.substring(0, 18);
    if (set_play_rpa == "rpa_browser_remote") {
        store.commit(types.SET_LOADING_PLAY_RPA, false);
    } else {
        store.commit(types.SET_LOADING, false);
    }
    return response;
}, error => {
    store.commit(types.SET_LOADING, false);
    store.commit(types.SET_LOADING_PLAY_RPA, false);
    return Promise.reject(error);
});

export default http;