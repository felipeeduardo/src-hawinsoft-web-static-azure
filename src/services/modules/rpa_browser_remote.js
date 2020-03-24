import { http } from '../config'

export const getRpaBrowserRemote = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };
    return http.get('rpa_browser_remote/' + data.id_user + '/' + data.id_rpa, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}