import * as types from './mutation-types'

const mutations = {
    [types.RPA_RESULT_SUCCESS](state, rpa_result) {
        state.rpa_result = rpa_result
    },
    [types.RPA_RESULT_ERROR](state, rpa_result) {
        state.rpa_result = rpa_result
    },
    [types.RPA_RESULT_SELECTED_SUCCESS](state, rpa_result_selected) {
        state.rpa_result = rpa_result_selected
    },
    [types.RPA_RESULT_SELECTED_ERROR](state, rpa_result_selected) {
        state.rpa_result = rpa_result_selected
    },
    [types.RPA_IMPORT_SUCCESS](state, rpa_import) {
        state.rpa_import = rpa_import
    },
    [types.RPA_IMPORT_ERROR](state, rpa_import) {
        state.rpa_import = rpa_import
    },
    [types.RPA_BROWSER_REMOTE_SUCCESS](state, rpa_browser_remote) {
        state.rpa_browser_remote = rpa_browser_remote
    },
    [types.RPA_BROWSER_REMOTE_ERROR](state, rpa_browser_remote) {
        state.rpa_browser_remote = rpa_browser_remote
    },
    [types.RPA_USER_SUCCESS](state, rpa_user) {
        state.rpa_user = rpa_user
    },
    [types.RPA_USER_ERROR](state, rpa_user) {
        state.rpa_user = rpa_user
    },
    [types.RPA_EVENTS_SUCCESS](state, rpa_events) {
        state.rpa_events = rpa_events
    },
    [types.RPA_EVENTS_ERROR](state, rpa_events) {
        state.rpa_events = rpa_events
    },
    [types.RPA_USER_ALL_SUCCESS](state, rpa_user_all) {
        state.rpa_user_all = rpa_user_all
    },
    [types.RPA_USER_ALL_ERROR](state, rpa_user_all) {
        state.rpa_user_all = rpa_user_all
    }
}

export default mutations