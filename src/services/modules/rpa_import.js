import { http } from '../config'

export const postRpaImport = (data) => {
    const headers = {
        'Content-Type': 'application/json',
        'x-access-token': data.token,
    };

    const data_import = {
        'id_user': data.id_user,
        'id_rpa_type': data.id_rpa_type,
        'import_data': data.import_data
    };

    return http.post('rpa/import', data_import, { headers })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}