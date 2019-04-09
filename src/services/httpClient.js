import { http } from './config'

export default {
    listGroupProcess: () => {
        return http.get('api')
    }
}