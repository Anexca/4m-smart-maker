'use client'

import React, { useState } from 'react'

import { emailClient } from '@/client/email'
import { IContactForm } from '@/types/components/organisms'
import { IEmailParams } from '@/types/models/email'

const ContactForm = () => {
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

    await emailClient.sendEmail(emailObject)
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
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input
              type="email"
              onChange={(e) =>
                setContactFormDetails({ ..._contactFormDetails, email: e.target.value })
              }
              value={_contactFormDetails.email}
              autoComplete="email"
              placeholder="Your email address"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
            />
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
