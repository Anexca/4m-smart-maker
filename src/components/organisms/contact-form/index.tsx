'use client'

import { isEmail } from '@teteu/utils'
import clsx from 'clsx'
import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

import { emailClient } from '@/client/email'
import { IContactForm } from '@/types/components/organisms'
import { IEmailParams } from '@/types/models/email'

const ContactForm = () => {
  const [_isEmailValid, setIsEmailValid] = useState(true)
  const [_contactFormDetails, setContactFormDetails] = useState<IContactForm>({
    name: '',
    email: '',
    message: ''
  })

  const handleSendClick = async () => {
    const emailObject: IEmailParams = {
      to_email: _contactFormDetails.email,
      to_message: _contactFormDetails.message,
      to_name: _contactFormDetails.name
    }

    if (!isEmail(emailObject.to_email)) {
      setIsEmailValid(false)
      return
    }

    resetContactForm()
    await emailClient.sendEmail(emailObject)
  }

  const resetContactForm = () => {
    setContactFormDetails({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div id="contactForm">
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input
              value={_contactFormDetails.name}
              onChange={(e) =>
                setContactFormDetails({ ..._contactFormDetails, name: e.target.value })
              }
              autoComplete="given-name"
              placeholder="Your name"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
            />
          </div>
          <div>
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => {
                  setIsEmailValid(true)
                  setContactFormDetails({ ..._contactFormDetails, email: e.target.value })
                }}
                value={_contactFormDetails.email}
                autoComplete="email"
                placeholder="Your email address"
                className={clsx(
                  'mb-2 w-full rounded-md border  py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0',
                  { 'border-gray-400': _isEmailValid, 'border-red-700': !_isEmailValid }
                )}
                aria-describedby="hs-validation-name-error-helper"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <IoMdInformationCircleOutline
                  className={clsx('flex-shrink-0 size-6 text-red-500', { hidden: _isEmailValid })}
                />
              </div>
            </div>
            <p
              className={clsx('text-sm text-red-600 my-2', { hidden: _isEmailValid })}
              id="hs-validation-name-error-helper"
            >
              Please enter a valid email address.
            </p>
          </div>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
          <textarea
            value={_contactFormDetails.message}
            name="textarea"
            onChange={(e) =>
              setContactFormDetails({ ..._contactFormDetails, message: e.target.value })
            }
            cols={30}
            rows={5}
            placeholder="Write your message..."
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
          />
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={handleSendClick}
          className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
        >
          Send Message
        </button>
      </div>
    </div>
  )
}

export default ContactForm
