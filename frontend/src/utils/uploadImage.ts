import { axios } from '../core/axios'

type UploadImageRes = {
  url: string
}

export const uploadImage = async (image: File): Promise<UploadImageRes> => {
  const formData = new FormData()
  formData.append('image', image)

  const { data } = await axios.post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return data
}
