import React from 'react'
import { FaLocationDot, FaPhoneVolume, FaRegClock } from 'react-icons/fa6'

import Layout from '@/components/layout'
import ContactCard from '@/components/molecules/contact-card'
import ContactForm from '@/components/organisms/contact-form'
import { ContactCardsData } from '@/constants/contact'

const Contact = () => {
  return (
    <Layout>
      <section className="" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight  text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl  text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-slate-400">
                  ClassName aptent taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac
                  tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  {ContactCardsData.map((contact) => {
                    return <ContactCard key={contact.id} contact={contact} />
                  })}
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-white">Ready to Get Started?</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
