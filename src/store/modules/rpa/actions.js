import * as rpa_result from '@/services/modules/rpa_result'
import * as types from './mutation-types'

export const resultRpaUser = ({ commit }, data) => {
    return rpa_result.getResultRpa(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_RESULT_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_RESULT_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_RESULT_ERROR, err)
            return Promise.reject(err)
        })
}

export const resultRpaUserSelected = ({ commit }, data) => {
    return rpa_result.getResultRpaSelected(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_RESULT_SELECTED_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_RESULT_SELECTED_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_RESULT_SELECTED_ERROR, err)
            return Promise.reject(err)
        })
}