import axios from 'axios'
import store from '@/store';
import * as types from '@/store/mutation-types'

export const http = axios.create({
    baseURL: 'https://hawinsoft.azurewebsites.net/api/'
})

//IMTERCEPTORS
http.interceptors.request.use(config => {
    var set_play_rpa;
    var runRpa = config.url.split('/');
    var i = 0;
    runRpa.forEach(el => {
        i++
        if (i == 2)
            set_play_rpa = el
    })
    //LOAD PLAY RPA
    if (set_play_rpa == "run") {
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
    var set_play_rpa;
    var runRpa = response.config.url.split('/');
    var i = 0;
    runRpa.forEach(el => {
        i++
        if (i == 6)
            set_play_rpa = el
    })
    if (set_play_rpa == "run") {
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