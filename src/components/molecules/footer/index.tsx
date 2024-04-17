import Image from 'next/image'
import React from 'react'

import logoImage from '@/assets/images/logo.jpg'
import Divider from '@/components/atoms/divider'

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 w-full mt-auto">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logoImage} className="h-10 w-16" width={100} height={100} alt="4M Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              4M Smart Maker
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium m:mb-0 text-gray-400">
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Divider />
        <span className="block text-sm text-center text-gray-400">
          © {new Date().getFullYear()} 4M
        </span>
      </div>
    </footer>
  )
}

export default Footer
