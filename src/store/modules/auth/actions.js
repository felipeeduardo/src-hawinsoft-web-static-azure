import * as auth from '@/services/modules/auth'
import * as types from './mutation-types'

export const logIn = ({ commit }, data) => {
    return auth.postLogin(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.AUTH_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.AUTH_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.AUTH_ERROR, err)
            return Promise.reject(err)
        })
}

export const logOut = ({ commit }) => {
    const data = {
        id: '',
        email: '',
        auth: '',
        token: ''
    }
    commit(types.AUTH_DESTROY, data)
}