import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import multer from 'multer'

import { registerValidations } from './validators/register'
import { passport } from './core/passport'

import { UserCtrl } from './controllers/UserController'
import { BumpsCtrl } from './controllers/BumpsController'
import { UploadFileCtrl } from './controllers/UploadFileController'
import { bumpsValidations } from './validators/bumps'


const app = express()

const storage = multer.memoryStorage()
const upload = multer({storage})

app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get('/users/me', passport.authenticate('jwt'), UserCtrl.getUserInfo)
app.get('/users/:id', UserCtrl.show)

app.get('/bumps', BumpsCtrl.index)
app.get('/bumps/:id', BumpsCtrl.show)
app.delete('/bumps/:id', passport.authenticate('jwt'), BumpsCtrl.delete)
app.patch('/bumps/:id', passport.authenticate('jwt'), bumpsValidations, BumpsCtrl.update)
app.post('/bumps', passport.authenticate('jwt'), bumpsValidations, BumpsCtrl.create)

app.get('/auth/verify', registerValidations, UserCtrl.verify)
app.post('/auth/register', registerValidations, UserCtrl.create)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.login)

app.post('/upload', upload.single('avatar'), UploadFileCtrl.upload)

app.listen(process.env.PORT, (): void => {
  console.log('SERVER RUNNED ON PORT:', process.env.PORT)
})
