import React, { FC } from 'react'
import { MdOutlineElectricBolt } from 'react-icons/md'

import { IServiceCardProps } from '@/types/components/molecules'

const ServiceCard: FC<IServiceCardProps> = ({ service }) => {
  return (
    <div className="size-full shadow-lg rounded-lg p-5 bg-black hover:bg-slate-900 flex items-center flex-col">
      <div className="flex text-center items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center lg:size-[62px] rounded-full border-4 border-gray-900 bg-black">
          {service.icon}
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold  text-white">{service.label}</h3>
        </div>
      </div>
      <p className="text-gray-400">{service.description}</p>
    </div>
  )
}

export default ServiceCard
