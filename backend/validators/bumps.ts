import { body } from 'express-validator'

export const bumpsValidations = [
  body('text', 'Enter bump text')
    .isString()
    .isLength({ max: 280 }).withMessage('Maximum bump length 280 characters')
]