import * as product from '@/services/modules/product'
import * as types from './mutation-types'

export const getProductsUser = ({ commit }, data) => {
    return product.getProducts(data.id, data.token)
        .then(result => {
            if (result.data.auth) {
                commit(types.PRODUCT_SUCCESS, result.data)
                return Promise.resolve(result)
            } else {
                commit(types.PRODUCT_SUCCESS, result.data)
                return Promise.resolve(result)
            }
        }).catch(err => {
            commit(types.PRODUCT_ERROR, err)
            return Promise.reject(err)
        })
}