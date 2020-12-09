import { http } from '../config'

export const addCredit = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.token,
    };

    const dataAdd = {
        'environmnet': data.environmnet,
        'id_user': data.id_user,
        'transaction': data.transaction,
        'credit': data.credit,
        'itemAmount': data.itemAmount,
        'senderName': data.senderName,
        'senderAreaCode': data.senderAreaCode,
        'senderEmail': data.senderAreaCode,
        'senderPhone': data.senderPhone
    };
    return http.post('v1/payments', dataAdd, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}