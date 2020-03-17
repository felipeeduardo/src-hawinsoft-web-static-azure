import { httpBrowserRemote } from '../configBrowserRemote'

export const runBrowserRemote = (data_steps) => {
    /*const headers = {
        'Content-Type': 'application/json'
    };*/

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        data: {
            data_steps
        }
    }

    return httpBrowserRemote.get('HawinsoftBrowser', { config })
        .then(res => {
            return Promise.resolve(res)
        })
        .catch(error => {
            return Promise.reject(error)
        })
}