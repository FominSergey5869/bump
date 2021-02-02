import axios from 'axios'
import { BumpType } from '../../store/bumps/types'

export const BumpsAPI = {
  fetchBumps(): Promise<BumpType[]> {
    return axios.get('https://trycode.pw/c/9AL2P.json').then(({data}) => data)
  }
  
}