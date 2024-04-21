import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'

const NavBar = () => {
  return (
    <div className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4">
      <nav
        className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            href="/"
            aria-label="Brand"
          >
            House Detan
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <GiHamburgerMenu className="hs-collapse-open:hidden" />
              <MdClose className="hs-collapse-open:block hidden" />
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <a className="font-medium text-gray-400 hover:underline" href="/" aria-current="page">
              Services
            </a>
            <a className="font-medium text-gray-400 hover:underline" href="/contact">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
