import React, { ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface IModalMask {
  visible?: boolean;
  maskClosable?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}
export function ModalMask({ visible, maskClosable, children, onClose }: IModalMask) {
  const backgroundRef = useRef(null);

  const [body, setBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    function backgroundClickHandler(e: MouseEvent) {
      if (e.target === backgroundRef.current) {
        onClose && onClose();
      }
    }

    if (maskClosable) {
      window.addEventListener('click', backgroundClickHandler);
    }

    setBody(() => document.getElementById('modal'));

    return () => {
      if (maskClosable) {
        window.removeEventListener('click', backgroundClickHandler);
      }
    };
  }, [maskClosable, onClose]);

  return body ? (
    ReactDOM.createPortal(
      <AnimatePresence>
        {visible && (
          <ModalMask.Style
            key="modal-mask"
            as={motion.div}
            className="modal__mask"
            ref={backgroundRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </ModalMask.Style>
        )}
      </AnimatePresence>,
      body
    )
  ) : (
    <></>
  );
}

ModalMask.Style = styled(motion.div)`
  position: fixed;
  z-index: 9999;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;
