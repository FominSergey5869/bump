import express from 'express'
import { validationResult } from 'express-validator'
import { UserModel } from '../models/UserModel'
import { generateMD5 } from '../utils/grnrrateHash'
import { sendEmail } from '../utils/sendEmail'

class UserController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({}).exec()

      res.json({
        status: 'succes',
        data: users
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error', errors: errors.array() })
        return
      }

      const data = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        confirmHash: generateMD5(process.env.SECRET_KEY || Math.random().toString())
      }

      const user = await UserModel.create(data)

      sendEmail({
        from: 'admin@bump.com',
        to: data.email,
        subject: 'Confirm email address to BUMP!',
        html: `To confirm your email follow 
              <a href='http://localhost:${process.env.PORT || 8888}/users/verify?hash=${data.confirmHash}'>
              to this link
              </a>`
      },
        (err: Error | null) => {
          if (err) {
            res.status(500).json({
              status: 'error',
              message: err
            })
          }
        })

      res.status(201).json({
        status: 'success',
        data: user
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash.toString()
      console.log(hash)
      if (!hash) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findOne({ confirmHash: hash }).exec()

      if (user) {
        user.confirmed = true
        user.save()
        res.json({
          status: 'succes'
        })
      } else {
        res.status(404).json({
          status: 'error',
          message: 'User not found'
        })
      }

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }
}

export const UserCtrl = new UserController()