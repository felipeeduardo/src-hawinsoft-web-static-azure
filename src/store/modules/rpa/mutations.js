import * as types from './mutation-types'

const mutations = {
    [types.RPA_RESULT_SUCCESS](state, rpa_result) {
        state.rpa_result = rpa_result
    },
    [types.RPA_RESULT_ERROR](state, rpa_result) {
        state.rpa_result = rpa_result
    },
    [types.RPA_RESULT_CHART_SUCCESS](state, rpa_resultChart) {
        state.rpa_result = rpa_resultChart
    },
    [types.RPA_RESULT_CHART_ERROR](state, rpa_resultChart) {
        state.rpa_result = rpa_resultChart
    },
    [types.RPA_RESULT_SELECTED_SUCCESS](state, rpa_result_selected) {
        state.rpa_result = rpa_result_selected
    },
    [types.RPA_RESULT_SELECTED_ERROR](state, rpa_result_selected) {
        state.rpa_result = rpa_result_selected
    },
    [types.RPA_UPLOAD_BACKLOG_SUCCESS](state, rpa_backlog) {
        state.rpa_backlog = rpa_backlog
    },
    [types.RPA_UPLOAD_BACKLOG_ERROR](state, rpa_backlog) {
        state.rpa_backlog = rpa_backlog
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
    },
    [types.RPA_USER_DELETE_SUCCESS](state, rpa_user_delete) {
        state.rpa_user_delete = rpa_user_delete
    },
    [types.RPA_USER_DELETE_ERROR](state, rpa_user_delete) {
        state.rpa_user_delete = rpa_user_delete
    },
    [types.RPA_USER_UNIQUE_SUCCESS](state, rpa_user_unique) {
        state.rpa_user_unique = rpa_user_unique
    },
    [types.RPA_USER_UNIQUE_ERROR](state, rpa_user_unique) {
        state.rpa_user_unique = rpa_user_unique
    },
    [types.RPA_BACKLOG_PROCESSED_SUCCESS](state, rpa_backlog_processed) {
        state.rpa_backlog_processed = rpa_backlog_processed
    },
    [types.RPA_BACKLOG_PROCESSED_ERROR](state, rpa_backlog_processed) {
        state.rpa_backlog_processed = rpa_backlog_processed
    },
    [types.RPA_TIMER_MEDIO_MIN_SUCCESS](state, rpa_timer_medio_min) {
        state.rpa_timer_medio_min = rpa_timer_medio_min
    },
    [types.RPA_TIMER_MEDIO_MIN_ERROR](state, rpa_timer_medio_min) {
        state.rpa_timer_medio_min = rpa_timer_medio_min
    }
}

export default mutations