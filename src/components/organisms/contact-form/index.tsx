import React from 'react'

const ContactForm = () => {
  return (
    <form id="contactForm">
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input
              type="text"
              id="name"
              autoComplete="given-name"
              placeholder="Your name"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
              name="name"
            />
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Your email address"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
              name="email"
            />
          </div>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
          <textarea
            id="textarea"
            name="textarea"
            cols={30}
            rows={5}
            placeholder="Write your message..."
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-gray-900 sm:mb-0"
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm
