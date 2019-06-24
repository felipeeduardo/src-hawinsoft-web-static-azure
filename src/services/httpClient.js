import { http } from './config'

export default {
    login: (data) => {
        return http.post('login', data)
    },
    newUser: (data) => {
        return http.post('new_user', data)
    }
}