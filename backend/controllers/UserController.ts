import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { validationResult } from 'express-validator'
import { UserModel, UserModelType } from '../models/UserModel'
import { generateMD5 } from '../utils/generateHash'
import { sendEmail } from '../utils/sendEmail'

const isValidObjectId = mongoose.Types.ObjectId.isValid

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
        message: error
      })
    }
  }

  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id
      if (!isValidObjectId(userId)) {
        res.status(400).send()
        return
      }

      const user = await UserModel.findOne({ _id: userId }).exec()


      if (!isValidObjectId(userId)) {
        res.status(404).send()
        return
      }
      res.json({
        status: 'succes',
        data: user
      })

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
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
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
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

  async login(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user ? (req.user as UserModelType).toJSON() : undefined
    try {
      res.json({
        status: 'success',
        data: {
          ...user,
          token: jwt.sign({ data: req.user }, process.env.SECRET_KEY || '123', { expiresIn: '30 days' })
        }
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

  async getUserInfo(req: express.Request, res: express.Response): Promise<void> {
    const user = req.user ? (req.user as UserModelType).toJSON() : undefined
    try {
      res.json({
        status: 'success',
        data: user
      })
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

}

export const UserCtrl = new UserController()