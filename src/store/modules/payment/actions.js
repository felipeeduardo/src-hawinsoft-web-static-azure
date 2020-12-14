import * as payment from '@/services/modules/payment'
import * as types from './mutation-types'

export const paymentAddCredit = ({ commit }, data) => {
    return payment.addCredit(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.PAYMENT_ADD_CREDIT_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.PAYMENT_ADD_CREDIT_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.PAYMENT_ADD_CREDIT_ERROR, err)
            return Promise.reject(err)
        })
}

export const paymentCreditHistoric = ({ commit }, data) => {
    return payment.getCreditHistoric(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.PAYMENT_CREDIT_HISTORIC_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.PAYMENT_CREDIT_HISTORIC_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.PAYMENT_CREDIT_HISTORIC_ERROR, err)
            return Promise.reject(err)
        })
}

export const paymentReferences = ({ commit }, data) => {
    return payment.getReferencesPayment(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.PAYMENT_REFERENCES_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.PAYMENT_REFERENCES_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.PAYMENT_REFERENCES_ERROR, err)
            return Promise.reject(err)
        })
}

export const paymentVerify = ({ commit }, data) => {
    return payment.getPayment(data)
        .then(result => {
            if (result.data.auth) {
                commit(types.PAYMENT_VERIFY_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.PAYMENT_VERIFY_ERROR, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.PAYMENT_VERIFY_ERROR, err)
            return Promise.reject(err)
        })
}