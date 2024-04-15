import React from 'react'

import ServiceCard from '@/components/molecules/service-card'
import { ServicesData } from '@/constants/services'
import { IServiceData } from '@/types/constants'

const Services = () => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
        {ServicesData.map((service) => {
          return <ServiceCard key={service.id} service={service} />
        })}
      </div>
    </div>
  )
}

export default Services
