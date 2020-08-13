import { http } from '../config'

export const postRpaUploadBacklog = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };

    const data_backlog = {
        'id_user': data.id_user,
        'id_rpa': data.id_rpa,
        'backlog_data': data.backlog_data
    };

    return http.post('v1/backlogs', data_backlog, { headers })
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
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/backlogs/processed/' + data.id_user + '/' + data.id_rpa, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}