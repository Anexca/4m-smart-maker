'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import LoadingScreen from '@/components/molecules/loading-screen'
import { ContactCardsData } from '@/constants/contact'
import { NotificationProvider } from '@/provider/notification'

const Layout = dynamic(() => import('@/components/layout'), {
  loading: () => <LoadingScreen />
})

const ContactCard = dynamic(() => import('@/components/molecules/contact-card'), {
  loading: () => <LoadingScreen />
})

const ContactForm = dynamic(() => import('@/components/organisms/contact-form'), {
  loading: () => <LoadingScreen />
})

const Contact = () => {
  return (
    <NotificationProvider>
      <Layout>
        <section id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <h2 className="font-heading mb-4 font-bold tracking-tight  text-white text-3xl sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl  text-slate-400">
                  We Provide Excellent Services
                </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                  <p className="mt-3 mb-12 text-lg text-slate-400">
                    For all your electrical service inquiries and questions, the House Detan team is
                    here to assist you promptly and efficiently. Feel free to reach out to us, and
                    we&apos;ll ensure your needs are addressed with professionalism and care.
                  </p>
                  <ul className="mb-6 md:mb-0">
                    {ContactCardsData.map((contact) => {
                      return <ContactCard key={contact.id} contact={contact} />
                    })}
                  </ul>
                </div>
                <div className="card h-fit lg:max-w-6xl lg:p-5" id="form">
                  <h2 className="mb-4 text-2xl font-bold text-center lg:text-left text-white">
                    Feel free to contact us anytime.
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </NotificationProvider>
  )
}

export default Contact
