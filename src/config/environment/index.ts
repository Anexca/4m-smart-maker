if (
  !process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY ||
  !process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ||
  !process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_TEMPLATE
) {
  throw new Error('Email JS Params are not defined')
}

export const Environment = {
  EMAIL_JS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
  EMAIL_JS_CONTACT_TEMPLATE: process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_TEMPLATE
}
