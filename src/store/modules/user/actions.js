import * as user from '@/services/modules/user'
import * as types from './mutation-types'

export const newUser = ({ commit }, data) => {
    return user.postNewUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.USER_CREATE_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.USER_CREATE_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.USER_CREATE_ERROR, err)
            return Promise.reject(err)
        })
}