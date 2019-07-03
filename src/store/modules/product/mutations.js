import * as types from './mutation-types'

const mutations = {
    [types.PRODUCT_SUCCESS](state, product) {
        state.product = product
    },
    [types.PRODUCT_ERROR](state, product) {
        state.product = product
    }
}

export default mutations