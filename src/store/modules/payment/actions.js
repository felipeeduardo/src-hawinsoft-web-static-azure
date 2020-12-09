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