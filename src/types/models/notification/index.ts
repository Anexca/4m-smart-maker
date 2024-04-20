import { IToastTypes } from '@/types/components/atoms'

export interface INotification {
  show: boolean
  message: string
  type: IToastTypes
}
