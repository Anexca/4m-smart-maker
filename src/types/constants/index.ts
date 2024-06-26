import { ReactNode } from 'react'

export interface IServiceData {
  id: string
  label: string
  description: string
  icon: ReactNode
  type: string
}

export interface IContactCardData {
  id: string
  title: string
  lineOne: string
  lineTwo: string
  icon: ReactNode
}
