import * as types from './mutation-types'

const mutations = {
    [types.USER_CREATE_SUCCESS](state, user) {
        state.user = user
    },
    [types.USER_CREATE_ERROR](state, user) {
        state.user = user
    }
}

export default mutations