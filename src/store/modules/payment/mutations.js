import * as types from './mutation-types'

const mutations = {
    [types.PAYMENT_ADD_CREDIT_SUCCESS](state, paymentoAddCredit) {
        state.paymentoAddCredit = paymentoAddCredit
    },
    [types.PAYMENT_ADD_CREDIT_ERROR](state, paymentoAddCredit) {
        state.paymentoAddCredit = paymentoAddCredit
    }
}

export default mutations