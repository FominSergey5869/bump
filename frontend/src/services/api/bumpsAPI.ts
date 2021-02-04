import axios from 'axios'
import { BumpType } from '../../store/bumps/types'

export const BumpsAPI = {
  fetchBumps(): Promise<BumpType[]> {
    return axios.get('/bumps').then(({data}) => data)
  }
  
}