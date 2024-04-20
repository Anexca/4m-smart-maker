import { ReactNode } from 'react'

import { IToastTypes } from '@/types/components/atoms'

export interface INotificationProvider {
  children: ReactNode
}

export interface INotificationContext {
  showNotification: (message: string, type?: IToastTypes) => void
}
