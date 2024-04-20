import { createContext, FC, useEffect, useState } from 'react'

import Toast from '@/components/atoms/toast'
import { IToastTypes } from '@/types/components/atoms'
import { INotification } from '@/types/models/notification'
import { INotificationContext, INotificationProvider } from '@/types/provider'

export const NotificationContext = createContext<INotificationContext>({} as INotificationContext)

export const NotificationProvider: FC<INotificationProvider> = ({ children }) => {
  const [notification, setNotification] = useState<INotification>({} as INotification)

  useEffect(() => {
    if (notification.show) {
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }))
      }, 3000)
    }
  }, [notification.show])

  const showNotification = (message: string, type: IToastTypes = 'info') => {
    setNotification({ show: true, message, type })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Toast show={notification.show} message={notification.message} type={notification.type} />
    </NotificationContext.Provider>
  )
}
