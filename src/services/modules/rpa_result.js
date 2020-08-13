import { http } from '../config'

export const getResultRpa = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/results/' + data.id_user + '/' + data.id_rpa + '/' + data.flag, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getResultRpaChart = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/results/chart/' + data.id_rpa, { headers })
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
    return http.get('v1/results/' + data.id_user + '/' + data.id_rpa + '/' + data.date_selected, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getResultTimerMedioMin = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/results/timer/' + data.id_rpa, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}