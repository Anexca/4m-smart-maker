import { FC } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

import { IContactCardProps } from '@/types/components/molecules'

const ContactCard: FC<IContactCardProps> = ({ contact }) => {
  return (
    <div className="flex">
      <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
        {contact.icon}
      </div>
      <div className="ml-4 mb-4">
        <h3 className="mb-2 text-lg font-medium leading-6  text-white">{contact.title}</h3>
        <p className=" text-slate-400">{contact.lineOne}</p>
        <p className=" text-slate-400">{contact.lineTwo}</p>
      </div>
    </div>
  )
}

export default ContactCard
