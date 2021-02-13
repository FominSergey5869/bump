import { body } from 'express-validator'

export const registerValidations = [
  body('email', 'Please, enter E-mail')
    .isString()
    .isEmail()
    .withMessage('No valid E-mail')
    .isLength({ min: 10, max: 40 })
    .withMessage('No valid E-mail'),
  body('fullname', 'Please, enter name')
    .isString()
    .isLength({ min: 2, max: 40 })
    .withMessage('No valid name'),
  body('username', 'Please, enter login')
    .isString()
    .isLength({ min: 2, max: 40 })
    .withMessage('No valid login'),
  body('password', 'Please, enter password')
    .isString()
    .isLength({ min: 6 })
    .withMessage('No valid login')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Passwords do not match')
      } else {
        return value
      }
    })
]
