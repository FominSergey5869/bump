import { axios } from '../../core/axios'
import { TopicType } from '../../store/topics/types'

export const TopicsAPI = {
  async fetchTopics(): Promise<TopicType[]> {
    const { data } = await axios.get('/topics')
    return data
  }
}
