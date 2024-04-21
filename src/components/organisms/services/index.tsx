import React from 'react'

import Divider from '@/components/atoms/divider'
import ServiceCard from '@/components/molecules/service-card'
import { ServiceTypesData } from '@/constants/services'

const Services = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Divider />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {ServiceTypesData.map((service) => {
          return <ServiceCard key={service.id} service={service} />
        })}
      </div>
    </div>
  )
}

export default Services
