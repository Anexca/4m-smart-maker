import { BiSolidCctv } from 'react-icons/bi'
import { BsHammer } from 'react-icons/bs'
import { FaFaucet, FaHouseDamage } from 'react-icons/fa'
import { MdOutlineElectricBolt } from 'react-icons/md'

import { IServiceData } from '@/types/constants/index'
import { generateRandomId } from '@/utils'

export const ServiceTypesData: IServiceData[] = [
  {
    id: generateRandomId(),
    label: 'Electrical Services',
    description: 'Expert electrical fitting services - done your way!',
    icon: <MdOutlineElectricBolt />,
    type: 'electrical'
  },
  {
    id: generateRandomId(),
    label: 'Plumbing Services',
    description: 'Expert plumbing solutions tailored to your needs - leak-proof and hassle-free.',
    icon: <FaFaucet />,
    type: 'plumbing'
  },
  {
    id: generateRandomId(),
    label: 'Carpentry Services',
    description: 'Crafting with care - professional carpentry services for your home.',
    icon: <BiSolidCctv />,
    type: 'carpentry'
  },
  {
    id: generateRandomId(),
    label: 'Construction Services',
    description: 'Reliable fire alarm installation - your safety matters!',
    icon: <BsHammer />,
    type: 'construction'
  },
  {
    id: generateRandomId(),
    label: 'Home Automation Services',
    description: 'Upgrade your lifestyle - expert home automation for modern convenience.',
    icon: <FaHouseDamage />,
    type: 'home-automation'
  },
  {
    id: generateRandomId(),
    label: 'CCTV Installation Services',
    description:
      'Secure your peace of mind - professional CCTV installation for reliable surveillance.',
    icon: <BiSolidCctv />,
    type: 'cctv'
  }
]
