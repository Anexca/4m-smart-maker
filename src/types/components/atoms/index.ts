import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  loading?: boolean
  loadingText?: string | ReactNode
}

export type IToastTypes = 'success' | 'error' | 'info' | 'warning'

export interface IToastProps {
  show?: boolean
  message: string | ReactNode
  onClose?: () => void
  type?: IToastTypes
  duration?: number
}
