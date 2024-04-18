'use client'

import dynamic from 'next/dynamic'

import LoadingScreen from '@/components/molecules/loading-screen'

const Layout = dynamic(() => import('@/components/layout'), {
  loading: () => <LoadingScreen />
})
const Services = dynamic(() => import('@/components/organisms/services'), {
  loading: () => <LoadingScreen />
})

const App = () => {
  return (
    <Layout>
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-2xl font-bold text-white sm:text-4xl">Smart Maker</h1>
        <p className="mt-3 text-lg text-gray-300">
          Your One-Stop Solution for All Household Needs.
        </p>
        <div id="services">
          <Services />
        </div>
      </div>
    </Layout>
  )
}

export default App
