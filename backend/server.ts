import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import { UserCtrl } from './controllers/UserController'
import { registerValidations } from './validators/register'

const app = express()

app.use(express.json())

app.get('/users', UserCtrl.index)
app.post('/users', registerValidations, UserCtrl.create)
app.get('/users/:id', registerValidations, UserCtrl.show)
app.get('/users/verify', registerValidations, UserCtrl.verify)
// app.patch('/users', UserCtrl.update)
// app.delete('/users', UserCtrl.delete)

app.listen(process.env.PORT, (): void => {
  console.log('SERVER RUNNED ON PORT:', process.env.PORT)
})