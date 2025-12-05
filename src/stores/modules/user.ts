import { defineStore } from 'pinia'
import type { loginForm, loginResponseData } from '@/api/user/type'
import { reqLogin } from '@/api/user'
import type { UserState } from './types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { constantRoutes } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN() || '',
      menuRoutes: constantRoutes,
    }
  },
  actions: {
    // 用户登录
    async userLogin(data: loginForm) {
      const response = await reqLogin(data)
      const res: loginResponseData = response.data
      if (res.code === 200) {
        this.token = res.data.token as string
        SET_TOKEN(this.token)
        // 返回成功promise
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
