import { axios } from '../../core/axios'

type AuthData = {
  username: string,
  password: string
}

export const AuthAPI = {
  async signIn(postData: AuthData): Promise<any> {
    const { data } = await axios.post('/auth/login', postData)
    return data
  }
}
