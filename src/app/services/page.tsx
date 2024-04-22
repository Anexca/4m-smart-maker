import dynamic from 'next/dynamic'
import React from 'react'

import LoadingScreen from '@/components/molecules/loading-screen'
import Services from '@/components/organisms/services'

const Layout = dynamic(() => import('@/components/layout'), {
  loading: () => <LoadingScreen />
})

const ServicesPage = () => {
  return (
    <Layout>
      <div className="flex justify-center mt-5">
        <h3 className="text-2xl">Our Services</h3>
      </div>
      <Services />
    </Layout>
  )
}

export default ServicesPage
