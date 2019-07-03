import { http } from '../config'

export const getResultRpa = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpa/result/' + data.id_user + '/' + data.id_rpa_type, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getResultRpaSelected = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpa/result/' + data.id_user + '/' + data.id_rpa_type + '/' + data.date_selected, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}