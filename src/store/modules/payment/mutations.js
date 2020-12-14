import * as types from './mutation-types'

const mutations = {
    [types.PAYMENT_ADD_CREDIT_SUCCESS](state, paymentoAddCredit) {
        state.paymentoAddCredit = paymentoAddCredit
    },
    [types.PAYMENT_ADD_CREDIT_ERROR](state, paymentoAddCredit) {
        state.paymentoAddCredit = paymentoAddCredit
    },
    [types.PAYMENT_CREDIT_HISTORIC_SUCCESS](state, paymentCreditHistoric) {
        state.paymentCreditHistoric = paymentCreditHistoric
    },
    [types.PAYMENT_CREDIT_HISTORIC_ERROR](state, paymentCreditHistoric) {
        state.paymentCreditHistoric = paymentCreditHistoric
    },
    [types.PAYMENT_VERIFY_SUCCESS](state, paymentVerify) {
        state.paymentVerify = paymentVerify
    },
    [types.PAYMENT_VERIFY_ERROR](state, paymentVerify) {
        state.paymentVerify = paymentVerify
    },
    [types.PAYMENT_REFERENCES_SUCCESS](state, paymentReferences) {
        state.paymentReferences = paymentReferences
    },
    [types.PAYMENT_REFERENCES_ERROR](state, paymentReferences) {
        state.paymentReferences = paymentReferences
    }
}

export default mutations