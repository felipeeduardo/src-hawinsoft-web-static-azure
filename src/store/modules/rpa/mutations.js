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
    }
}

export default mutations