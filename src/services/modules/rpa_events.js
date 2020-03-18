import { http } from '../config'

export const getAllRpaEvents = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpaevent', { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}