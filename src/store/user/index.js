import axios from 'axios';
import { siteData } from '@/config';

const userManage = {
    state: {
        userToken: '',
        userRefreshToken: '',
        user:{}
    },
    getters: {
        getUserToken: (state) => state.userToken,
        getUserRefreshToken: (state) => state.userRefreshToken
    },
    mutations: {
        setUserToken: (state, data) => {
            state.userToken = data
        },
        setUserRefreshToken: (state, data) => {
            state.userRefreshToken = data
        }
    },
    actions: {
        loginUser: ({ commit }) => {
            const payload = { username: 'alisabah', password: 'alisabah', crsid: 'testusd' }
            axios.post(siteData.requestURL+'/v1/register/login',JSON.stringify(payload),{  headers: {
                    'Content-Type': 'application/json',
                }
            }).then((r) => {
                console.log(r.data)
                localStorage.setItem('token', r.data.token)
                commit('setToken',r.data.token)
            }).catch(() => {

            })
        }
    }
}
export default userManage
