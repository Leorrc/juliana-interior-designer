import React, { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'

import './styles.css'

interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  children
}) => {
  const outsideRef = React.useRef(null)

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose()
    }
  }

  return isOpen ? (
    <div className={'modal'}>
      <div
        ref={outsideRef}
        className={'modal__overlay'}
        onClick={handleCloseOnOverlay}
      />
      <div className={'modal__box'}>
        <button className={'modal__close'} onClick={onClose}>
          <svg>
            <MdClose />
          </svg>
        </button>
        <div className={'modal__title'}>{title}</div>
        <div className={'modal__content'}>{children}</div>
      </div>
    </div>
  ) : null
}
