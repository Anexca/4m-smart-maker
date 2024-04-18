import { FaLocationDot, FaPhoneVolume, FaRegClock } from 'react-icons/fa6'

import { IContactCardData } from '@/types/constants'
import { generateRandomId } from '@/utils'

export const ContactCardsData: IContactCardData[] = [
  {
    id: generateRandomId(),
    title: 'Our Address',
    lineOne: 'Ramsumer Baba Nagar Kawarapeth',
    lineTwo: 'Nagpur 440002',
    icon: <FaLocationDot size="1.2rem" />
  },
  {
    id: generateRandomId(),
    title: 'Contact',
    lineOne: 'Mobile: +91 88559 12266',
    lineTwo: 'Mail: rjbhoge@gmail.com',
    icon: <FaPhoneVolume size="1.2rem" />
  },
  {
    id: generateRandomId(),
    title: 'Working hours',
    lineOne: 'Monday - Friday: 08:00 - 20:00',
    lineTwo: 'Saturday & Sunday: 08:00 - 18:00',
    icon: <FaRegClock size="1.2rem" />
  }
]
