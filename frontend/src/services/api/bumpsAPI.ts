import axios from 'axios'
import { BumpType } from '../../store/bumps/types'

export const BumpsAPI = {
  fetchBumps(): Promise<BumpType[]> {
    return axios.get('/bumps').then(({data}) => data)
  },
  fetchBumpData(id: string): Promise<BumpType> {
    return axios.get('/bumps?_id=' + id).then(({data}) => data[0])
  },
  addBumpData(payload: BumpType): Promise<BumpType> {
    return axios.post('/bumps', payload).then(({data}) => data)
  }
}

