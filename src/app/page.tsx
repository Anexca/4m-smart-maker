import Image from 'next/image'

import homeImage from '@/assets/images/0.jpg'

const App = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:my-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Smart Maker
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Introducing a smarter and better way for all your electrical needs
          </p>
          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                placeholder="Enter email"
              />
            </div>
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Request demo
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 mt-10 lg:mt-0">
          <Image className="ounded-xl" src={homeImage} width={400} alt="Image Description" />
        </div>
      </div>
    </div>
  )
}

export default App
