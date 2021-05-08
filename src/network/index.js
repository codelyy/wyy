import axios from 'axios'
const babanizhenniubi = axios.create({
    baseURL: 'http://123.207.32.32:9001',
    timeout: 10000
})
babanizhenniubi.interceptors.response.use(v => {

    return v.data

}, err => {
    throw new Error('interceptors 响应出错')
})
babanizhenniubi.interceptors.request.use(v => {
    return v
})

const io = (config) => {
    return new Promise((resolve, reject) => {
        babanizhenniubi(config).then(v => resolve(v)).catch(e => reject(e))
    })
}
export default io