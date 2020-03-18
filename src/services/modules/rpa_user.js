import { http } from '../config'


export const addNewRpaUser = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    const body = {
        "name": data.name,
        "steps": data.steps,
        "id_user": data.id_user
    }
    return http.post('rpa', body, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const getAllRpaUser = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpa/' + data.id_user, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}

export const deleteRpaUser = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    const body = {
        "id_user": data.id_user,
        "id_rpa": data.id_rpa
    }
    return http.post('rpauserdelete', body, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}