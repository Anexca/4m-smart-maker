import { IServiceData } from '@/types/constants/index'
import { generateRandomId } from '@/utils'

export const ServicesData: IServiceData[] = [
  {
    id: generateRandomId(),
    label: 'Electrical Fitting',
    description: 'Expert electrical fitting services - done your way!'
  },
  {
    id: generateRandomId(),
    label: 'House Wiring',
    description: 'Professional house wiring services for your home - done right!'
  },
  {
    id: generateRandomId(),
    label: 'CCTV Installation',
    description: 'Efficient CCTV installation - hassle-free!'
  },
  {
    id: generateRandomId(),
    label: 'Fire Alarm Installation',
    description: 'Reliable fire alarm installation - your safety matters!'
  },
  {
    id: generateRandomId(),
    label: 'Home Automation',
    description: "Smart home automation - we've got the expertise!"
  },
  {
    id: generateRandomId(),
    label: 'Furniture Work',
    description: "Need plumbing work done? We're here to help!"
  }
]
