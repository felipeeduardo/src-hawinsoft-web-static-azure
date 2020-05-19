import * as types from './mutation-types'

const mutations = {
    [types.SET_LOADING](state, loading) {
        state.loading = loading
    },
    [types.SET_LOADING_PLAY_RPA](state, loading_play_rpa) {
        state.loading_play_rpa = loading_play_rpa
    }
}

export default mutations