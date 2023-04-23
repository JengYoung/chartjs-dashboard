import React, { ReactNode } from 'react';
import { ModalMask } from '../Modal/ModalMask';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface IBottomDrawer { 
  visible?: boolean;
  maskClosable?: boolean;
  onClose?: () => void;
  children?: ReactNode;
  height?: string;
}

export default function BottomDrawer({
  visible,
  maskClosable,
  onClose,
  children,
  height,
}: IBottomDrawer) {
  return (
    <ModalMask visible={visible} maskClosable={maskClosable} onClose={onClose}>
      <BottomDrawer.Container
        height={height}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </BottomDrawer.Container>
    </ModalMask>
  );
}

BottomDrawer.Container = styled(props => <motion.div {...props} />)`
  position: absolute;
  z-index: 11;
  bottom: 0;

  width: 100%;
  height: ${(props) =>
    props.height ??
    css`
      calc(
        100vh - ${(props) => props.theme.layouts.header.default.mobile.height}
      )
  `};

  padding: 20px;

  background-color: ${(props) => props.theme.color.white};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
