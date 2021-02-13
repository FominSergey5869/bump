import express from 'express'
import { validationResult } from 'express-validator'
import { BumpModel, BumpModelType } from '../models/BumpModel'
import { UserModelType } from '../models/UserModel'
import { isValidObjectId } from '../utils/isValidObjectId'

class BumpsController {
  async index(_: any, res: express.Response): Promise<void> {
    try {
      const bumps = await BumpModel.find({}).exec()

      res.json({
        status: 'succes',
        data: bumps
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
      const bumpId = req.params.id

      if (!isValidObjectId(bumpId)) {
        res.status(400).send()
        return
      }

      const bump = await BumpModel.findOne({ _id: bumpId }).exec()

      if (bump) {
        res.json({
          status: 'succes',
          data: bump
        })
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Bump not found'
        })
      }

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async create(req: express.Request, res: express.Response): Promise<void> {

    const user = req.user as UserModelType

    try {
      if (user) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
          res.status(400).json({ status: 'error', errors: errors.array() })
          return
        }

        const data: BumpModelType = {
          text: req.body.text,
          user: user._id
        }

        const bump = await BumpModel.create(data)

        res.json({
          status: 'succes',
          data: bump
        })
      }

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error
      })
    }
  }

  async delete(req: express.Request, res: express.Response): Promise<void> {

    const user = req.user as UserModelType

    try {
      if (user) {
        const bumpId = req.params.id

        if (!isValidObjectId(bumpId)) {
          res.status(400).send()
          return
        }

        const bump = await BumpModel.findOne({ _id: bumpId })
        
        if (bump) {
          if (bump.user.toString() === user._id.toString()) {
            bump.remove()
            res.send()
          } else {
            res.status(403).send()
          }

        } else {
          res.status(404).send()
        }

      }

    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: JSON.stringify(error)
      })
    }
  }

}

export const BumpsCtrl = new BumpsController()