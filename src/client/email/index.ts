import emailjs from '@emailjs/browser'

import { Environment } from '@/config/environment'
import { IEmailParams } from '@/types/models/email'

class EmailClient {
  constructor() {
    this.init()
  }

  private init = () => {
    emailjs.init({
      publicKey: Environment.EMAIL_JS_PUBLIC_KEY,
      blockHeadless: true
    })
  }

  sendEmail = async (emailContent: IEmailParams) => {
    return await new Promise((resolve, reject) => {
      emailjs
        .send(
          Environment.EMAIL_JS_SERVICE_ID,
          Environment.EMAIL_JS_CONTACT_TEMPLATE,
          emailContent as any
        )
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export const emailClient = new EmailClient()
