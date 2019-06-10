import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://api-hawinsoft-com-br.umbler.net/hawinsoft/api/'
})