if (
  !process.env.EMAIL_JS_PUBLIC_KEY ||
  !process.env.EMAIL_JS_SERVICE_ID ||
  !process.env.EMAIL_JS_CONTACT_TEMPLATE
)
  throw new Error('Email JS Params are not defined')

export const Environment = {
  EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
  EMAIL_JS_CONTACT_TEMPLATE: process.env.EMAIL_JS_CONTACT_TEMPLATE
}
