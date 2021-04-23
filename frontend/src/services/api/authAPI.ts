import { axios } from '../../core/axios'

export type AuthData = {
  username: string,
  password: string
}

export const AuthAPI = {
  async signIn(postData: AuthData) {
    const { data } = await axios.post('/auth/login', postData)
    return data
  }
}