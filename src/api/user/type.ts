// 登录携带的参数
export interface loginForm {
  username: string
  password: string
}

interface dataType {
  token?: string
  message?: string
}

// 登录返回数据
export interface loginResponseData {
  code: number
  data: dataType
}

// 获取用户信息类型
interface userInfo {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

interface user {
  checkUser: userInfo
}

// 获取用户信息返回数据
export interface userResponseData {
  code: number
  data: user
}
