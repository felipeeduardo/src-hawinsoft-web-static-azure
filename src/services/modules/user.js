import { http } from '../config'

export const postNewUser = (data) => {
    return http.post('new_user', data)
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}