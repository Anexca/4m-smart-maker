import clsx from 'clsx'
import { FC, Fragment, ReactNode, useEffect, useState } from 'react'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { FaExclamation, FaInfo } from 'react-icons/fa6'
import { MdOutlineDone } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'

import { IToastProps, IToastTypes } from '@/types/components/atoms'

const Toast: FC<IToastProps> = ({
  show = false,
  message,
  onClose,
  type = 'info',
  duration = 3000
}) => {
  const [_showToast, setShowToast] = useState(show)

  useEffect(() => {
    if (_showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, duration)
    }
  }, [_showToast])

  const toastColors: Record<IToastTypes, string> = {
    info: 'bg-blue-800 text-blue-200',
    error: 'bg-red-800 text-red-200',
    warning: 'bg-orange-800 text-orange-200',
    success: 'bg-green-800 text-green-200'
  }

  const toastIcons: Record<IToastTypes, ReactNode> = {
    info: <FaInfo size="1.2rem" />,
    error: <BiSolidErrorCircle size="1.3rem" />,
    warning: <FaExclamation size="1.3rem" />,
    success: <MdOutlineDone size="1.3rem" />
  }

  const handleClose = () => {
    setShowToast(false)
    onClose?.()
  }

  return (
    <Fragment>
      <div
        id="toast"
        className={clsx(
          'fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow z-10 transition-all duration-500',
          toastColors[type],
          { 'opacity-0': !_showToast }
        )}
        role="alert"
      >
        <div
          className={clsx(
            'inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg'
          )}
        >
          {toastIcons[type]}
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          onClick={handleClose}
          className="ms-auto -mx-1.5 -my-1.5 inline-flex items-center justify-center h-8 w-8"
        >
          <span className="sr-only">Close</span>
          <RxCross2 />
        </button>
      </div>
    </Fragment>
  )
}

export default Toast
