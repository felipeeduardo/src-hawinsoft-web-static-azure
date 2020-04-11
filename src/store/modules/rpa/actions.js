import * as rpa_result from '@/services/modules/rpa_result'
import * as rpa_import from '@/services/modules/rpa_import'
import * as rpa_user from '@/services/modules/rpa_user'
import * as rpa_events from '@/services/modules/rpa_events'
import * as rpa_browser_remote from '@/services/modules/rpa_browser_remote'
import * as types from './mutation-types'

export const RpaBrowserRemore = ({ commit }, data) => {
    return rpa_browser_remote.getRpaBrowserRemote(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_BROWSER_REMOTE_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_BROWSER_REMOTE_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_BROWSER_REMOTE_ERROR, err)
            return Promise.reject(err)
        })
}

export const RpaEvents = ({ commit }, data) => {
    return rpa_events.getAllRpaEvents(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_EVENTS_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_EVENTS_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_EVENTS_ERROR, err)
            return Promise.reject(err)
        })
}

export const allRpaUser = ({ commit }, data) => {
    return rpa_user.getAllRpaUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_USER_ALL_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_USER_ALL_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_USER_ALL_ERROR, err)
            return Promise.reject(err)
        })
}

export const UniqueRpaUser = ({ commit }, data) => {
    return rpa_user.getRpaUserUnique(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_USER_UNIQUE_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_USER_UNIQUE_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_USER_UNIQUE_ERROR, err)
            return Promise.reject(err)
        })
}

export const deleteRpaUser = ({ commit }, data) => {
    return rpa_user.deleteRpaUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_USER_DELETE_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_USER_DELETE_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_USER_DELETE_ERROR, err)
            return Promise.reject(err)
        })
}

export const NewRpaUser = ({ commit }, data) => {
    return rpa_user.addNewRpaUser(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_USER_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_USER_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_USER_ERROR, err)
            return Promise.reject(err)
        })
}

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

export const resultRpaUserChart = ({ commit }, data) => {
    return rpa_result.getResultRpaChart(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_RESULT_CHART_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_RESULT_CHART_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_RESULT_CHART_ERROR, err)
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

export const importDataRpa = ({ commit }, data) => {
    return rpa_import.postRpaImport(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.RPA_IMPORT_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.RPA_IMPORT_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.RPA_IMPORT_ERROR, err)
            return Promise.reject(err)
        })
}