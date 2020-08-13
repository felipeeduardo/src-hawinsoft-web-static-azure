import { http } from '../config'

export const getRpaBrowserRemote = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/run/' + data.id_user + '/' + data.id_rpa, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}