import React, { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import useOnEscapeKeyDown from '../../hooks/useOnEscapeKeyDown';

type ModalProps = {
  id: string; // for Accessibility
  isOpen: boolean;
  handleClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, id, isOpen, handleClose }) => {
  // Close modal when clicking outside of the modal content
  const contentRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(contentRef, handleClose);
  // Keyboard support
  useOnEscapeKeyDown(handleClose);

  return (
    <div
      className={`modal ${isOpen ? 'modal--open' : ''}`}
      role='dialog'
      aria-modal
      aria-labelledby={id}
      aria-describedby={`${id}-content`}
    >
      <div
        id={`${id}-content`}
        ref={contentRef}
        className={`modal__content ${isOpen ? 'modal__content--open' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
