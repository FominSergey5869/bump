import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import { UserCtrl } from './controllers/UserController'
import { registerValidations } from './validators/register'
import { passport } from './core/passport'

const app = express()

app.use(express.json())
app.use(passport.initialize())

app.get('/users', UserCtrl.index)
app.get('/users/me', passport.authenticate('jwt'), UserCtrl.getUserInfo)
app.get('/users/:id', UserCtrl.show)
app.get('/auth/verify', registerValidations, UserCtrl.verify)
app.post('/auth/register', registerValidations, UserCtrl.create)
app.post('/auth/login', passport.authenticate('local'), UserCtrl.login)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
  console.log('SERVER RUNNED ON PORT:', process.env.PORT)
})