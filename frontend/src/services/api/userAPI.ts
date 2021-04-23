import { axios } from '../../core/axios'

export const UserAPI = {
  async fetchUserData() {
    const { data } = await axios.get('/users/me')
    return data
  }
}
