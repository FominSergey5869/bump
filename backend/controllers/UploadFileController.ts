import express from 'express'
import cloudinary from '../core/cloudinary'

class UploadFileController {
  async upload(req: any, res: express.Response): Promise<void> {
    const file = req.file

    cloudinary.v2.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          transformation: {
            gravity: 'face',
            width: 720,
            height: 720,
            crop: 'crop',
          },
        },
        (error, result) => {
          if (error || !result) {
            return res.status(500).json({
              status: 'error',
              message: error || 'upload error',
            })
          }
          res.status(201).json({
            url: result.url,
          })
        }
      )
      .end(file.buffer)
  }
}

export const UploadFileCtrl = new UploadFileController()
