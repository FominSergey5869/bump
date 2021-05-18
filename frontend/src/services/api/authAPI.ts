import { axios } from '../../core/axios'

export type AuthData = {
  username: string
  password: string
}

export type SignupData = {
  email: string
  username: string
  fullname: string
  password: string
  password2: string
}

export const AuthAPI = {
  async signIn(postData: AuthData) {
    const { data } = await axios.post('/auth/login', postData)
    return data
  },
  async signUp(postData: SignupData) {
    const { data } = await axios.post('/auth/register', postData)
    return data
  },
}
