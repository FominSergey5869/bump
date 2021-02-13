import { SentMessageInfo } from 'nodemailer'
import { mailer } from '../core/mailer'

type email = {
  from: string
  to: string
  subject: string
  html: string
}

export const sendEmail = (
  { from, to, subject, html }: email,
  callback?: (err: Error | null, info: SentMessageInfo) => void
) =>
  mailer.sendMail(
    {
      from,
      to,
      subject,
      html
    },
    callback ||
      function (err: Error | null, info: SentMessageInfo) {
        if (err) {
          console.log(err)
        } else {
          console.log(info)
        }
      }
  )
