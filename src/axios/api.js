/**   
 * api接口统一管理
 */
import { axios_get, axios_post } from './http'
import { api_cmd } from './cmd';
const api = {
    login: (params) => {
        params={
            cmd: api_cmd.login,
            user_name:params.user_name,
            user_pwd:params.user_pwd
        }
        
        return axios_get(params)
    },
    visitor_login:(params)=>{
        params={
            cmd:api_cmd.visitor_login
        }
        return axios_get(params)
    }

}

export default api
 