import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EditPancel from '../Icon/EditPancel';

interface IEditButton { 
  size?: 'm' | 's' | 'xs' | 'l' | 'xl';
  onClick?: () => void;
  disabled?: boolean;
}
export default function EditButton({ size = 'm', onClick, disabled }: IEditButton) {
  return (
    <EditButton.Wrapper
      size={size}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 1.1 }}
    >
      <EditPancel width="100%" height="100%" />
    </EditButton.Wrapper>
  );
}

EditButton.Wrapper = styled(props => <motion.button { ...props } />)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.size === 'm' ? '30px' : '20px')};
  height: ${(props) => (props.size === 'm' ? '30px' : '20px')};
  background-color: ${(props) => props.theme.color.primary[500]};
  border-radius: 50%;
  border: none;

  cursor: pointer;

  &:disabled {
    cursor: auto;
  }
`;
