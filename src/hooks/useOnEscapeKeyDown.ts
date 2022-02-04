import { useEffect, useCallback } from 'react';

const useOnEscapeKeyDown = (handler: (e: KeyboardEvent) => void) => {
  const handleEscapeKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      const { key } = e;
      switch (key) {
        case 'Escape':
          e.preventDefault();
          handler(e);
          break;
        default:
      }
    },
    [handler]
  );

  // Element that triggered the modal
  const activeElement = document.activeElement as HTMLElement;

  useEffect(() => {
    window.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      window.removeEventListener('keydown', handleEscapeKeyDown);
      // If the element that triggered the modal is still in the DOM, restore focus
      if (activeElement) {
        activeElement.focus();
      }
    };
  }, [activeElement, handleEscapeKeyDown]);
};

export default useOnEscapeKeyDown;
