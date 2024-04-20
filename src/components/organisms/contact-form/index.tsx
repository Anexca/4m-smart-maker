'use client'

import { isEmail } from '@teteu/utils'
import clsx from 'clsx'
import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

import { emailClient } from '@/client/email'
import Button from '@/components/atoms/button'
import { useNotification } from '@/hooks/use-notification'
import { IContactForm } from '@/types/components/organisms'
import { IEmailParams } from '@/types/models/email'

const ContactForm = () => {
  const { showNotification } = useNotification()

  const [_isSendingMessage, setIsSendingMessage] = useState(false)
  const [_isFormValid, setIsFormValid] = useState({
    name: true,
    email: true,
    message: true
  })
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

    if (!validateForm()) {
      return
    }

    resetContactForm()

    try {
      setIsSendingMessage(true)
      await emailClient.sendEmail(emailObject)
      showNotification('Message Sent Successfully!', 'success')
    } catch (error) {
      showNotification('Something went wrong, please try again.', 'error')
    } finally {
      setIsSendingMessage(false)
    }
  }

  const resetContactForm = () => {
    setContactFormDetails({
      name: '',
      email: '',
      message: ''
    })
  }

  const validateForm = () => {
    let isValid = true

    if (!isEmail(_contactFormDetails.email)) {
      setIsFormValid((prev) => {
        return { ...prev, email: false }
      })
      isValid = false
    }

    if (!_contactFormDetails.name?.trim()) {
      setIsFormValid((prev) => {
        return { ...prev, name: false }
      })
      isValid = false
    }

    const symbolRegex = /[^\w\s]/

    if (
      !_contactFormDetails.message?.trim() ||
      _contactFormDetails.message.replace(symbolRegex, '').trim().length <= 10
    ) {
      setIsFormValid((prev) => {
        return { ...prev, message: false }
      })
      isValid = false
    }

    return isValid
  }

  return (
    <div id="contactForm">
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
            <div className="relative">
              <input
                value={_contactFormDetails.name}
                onChange={(e) => {
                  setIsFormValid({ ..._isFormValid, name: true })
                  setContactFormDetails({ ..._contactFormDetails, name: e.target.value })
                }}
                autoComplete="given-name"
                placeholder="Your name"
                className={clsx(
                  'mb-2 w-full rounded-md border  py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0',
                  {
                    'border-gray-400': _isFormValid.name,
                    'border-red-700': !_isFormValid.name
                  }
                )}
              />
              <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <IoMdInformationCircleOutline
                  className={clsx('flex-shrink-0 size-6 text-red-500', {
                    hidden: _isFormValid.name
                  })}
                />
              </div>
            </div>
            <p className={clsx('text-sm text-red-600 my-2', { hidden: _isFormValid.name })}>
              Please enter a valid name.
            </p>
          </div>
          <div>
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => {
                  setIsFormValid({ ..._isFormValid, email: true })
                  setContactFormDetails({ ..._contactFormDetails, email: e.target.value })
                }}
                value={_contactFormDetails.email}
                autoComplete="email"
                placeholder="Your email address"
                className={clsx(
                  'mb-2 w-full rounded-md border  py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0',
                  { 'border-gray-400': _isFormValid.email, 'border-red-700': !_isFormValid.email }
                )}
                aria-describedby="hs-validation-name-error-helper"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                <IoMdInformationCircleOutline
                  className={clsx('flex-shrink-0 size-6 text-red-500', {
                    hidden: _isFormValid.email
                  })}
                />
              </div>
            </div>
            <p className={clsx('text-sm text-red-600 my-2', { hidden: _isFormValid.email })}>
              Please enter a valid email address.
            </p>
          </div>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
          <div className="relative">
            <textarea
              value={_contactFormDetails.message}
              name="textarea"
              onChange={(e) => {
                setIsFormValid({ ..._isFormValid, message: true })
                setContactFormDetails({ ..._contactFormDetails, message: e.target.value })
              }}
              cols={30}
              rows={5}
              placeholder="Write your message..."
              className={clsx(
                'mb-2 w-full rounded-md border  py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0',
                { 'border-gray-400': _isFormValid.message, 'border-red-700': !_isFormValid.message }
              )}
            />
            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
              <IoMdInformationCircleOutline
                className={clsx('flex-shrink-0 size-6 text-red-500', {
                  hidden: _isFormValid.message
                })}
              />
            </div>
          </div>
          <p className={clsx('text-sm text-red-600 my-2', { hidden: _isFormValid.message })}>
            Please enter a valid message.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Button
          onClick={handleSendClick}
          loading={_isSendingMessage}
          loadingText="Sending Message"
          className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
        >
          Send Message
        </Button>
      </div>
    </div>
  )
}

export default ContactForm
