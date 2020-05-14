import { http } from '../config'

export const postRpaUploadBacklog = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };

    const data_backlog = {
        'id_user': data.id_user,
        'id_rpa': data.id_rpa,
        'backlog_data': data.backlog_data
    };

    return http.post('rpa/backlog', data_backlog, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getbacklogAndProcessed = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpa/backlog/' + data.id_user + '/' + data.id_rpa, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}