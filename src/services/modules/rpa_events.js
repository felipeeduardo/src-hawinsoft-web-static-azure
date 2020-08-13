import { http } from '../config'

export const getAllRpaEvents = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };
    return http.get('v1/events', { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}