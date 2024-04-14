import { BiSolidCctv } from 'react-icons/bi'
import { BsHammer } from 'react-icons/bs'
import { FaFireAlt, FaHouseDamage } from 'react-icons/fa'
import { MdOutlineElectricBolt } from 'react-icons/md'
import { SiHomebridge } from 'react-icons/si'

import { IServiceData } from '@/types/constants/index'
import { generateRandomId } from '@/utils'

export const ServicesData: IServiceData[] = [
  {
    id: generateRandomId(),
    label: 'Electrical Fitting',
    description: 'Expert electrical fitting services - done your way!',
    icon: <MdOutlineElectricBolt />
  },
  {
    id: generateRandomId(),
    label: 'House Wiring',
    description: 'Professional house wiring services for your home - done right!',
    icon: <FaHouseDamage />
  },
  {
    id: generateRandomId(),
    label: 'CCTV Installation',
    description: 'Efficient CCTV installation - hassle-free!',
    icon: <BiSolidCctv />
  },
  {
    id: generateRandomId(),
    label: 'Fire Alarm Installation',
    description: 'Reliable fire alarm installation - your safety matters!',
    icon: <FaFireAlt />
  },
  {
    id: generateRandomId(),
    label: 'Home Automation',
    description: "Smart home automation - we've got the expertise!",
    icon: <SiHomebridge />
  },
  {
    id: generateRandomId(),
    label: 'Furniture Work',
    description: "Need plumbing work done? We're here to help!",
    icon: <BsHammer />
  }
]
