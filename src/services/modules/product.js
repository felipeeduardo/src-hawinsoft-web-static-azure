import { http } from '../config'

export const getProducts = (id, token) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': token,
    };
    return http.get('products/' + id, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}