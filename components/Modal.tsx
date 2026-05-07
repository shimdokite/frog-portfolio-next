'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  closeOnOverlay?: boolean;
  panelClassName?: string;
  children: React.ReactNode;
};

export function Modal({
  open,
  onOpenChange,
  closeOnOverlay = true,
  panelClassName = 'modal-panel-sm',
  children
}: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeydown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={() => {
        if (closeOnOverlay) {
          onOpenChange(false);
        }
      }}
    >
      <div
        className={`modal-panel ${panelClassName}`}
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          aria-label="Close modal"
          onClick={() => onOpenChange(false)}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
