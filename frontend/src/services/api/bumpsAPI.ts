import { axios } from '../../core/axios'
import { BumpType } from '../../store/bumps/types'

interface Response<T> {
  status: string
  data: T
}

export const BumpsAPI = {
  async fetchBumps(): Promise<BumpType[]> {
    const { data } = await axios.get<Response<BumpType[]>>('/bumps')
    return data.data
  },
  async fetchBumpData(id: string): Promise<BumpType> {
    const { data } = await axios.get<Response<BumpType>>('/bumps/' + id)
    return data.data
  },
  async addBumpData(payload: string): Promise<BumpType> {
    const { data } = await axios.post<Response<BumpType>>('/bumps', { text: payload })
    return data.data
  }
}
