import React from 'react';
import styled, { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import {DefaultButton} from '../Button/DefaultButton';
import { DefaultInput } from '../Input/DefaultInput';

interface IModalInputForm {
  placeholder?: string;
  onChangeInput?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  autoFocus?: boolean;
}

export function ModalInputForm({
  placeholder,
  onChangeInput,
  onSubmit,
  disabled,
  autoFocus,
}: IModalInputForm) {
  const theme = useTheme();

  return (
    <AnimatePresence>
      <ModalInputForm.Form
        onSubmit={onSubmit}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ y: 100 }}
      >
        <DefaultInput
          placeholder={placeholder}
          onChange={onChangeInput}
          border="none"
          fontWeight="bold"
          flex="1"
          autoFocus={autoFocus}
        />

        <DefaultButton
          width="50px"
          height="30px"
          borderRadius="15px"
          backgroundColor={theme.color.primary[500]}
          onSubmit={onSubmit}
          color={theme.color.white}
          fontSize={theme.fontSize.sm}
          fontWeight="bold"
          disabledBackgroundColor={theme.color.primary[300]}
          disabled={disabled}
        >
          확인
        </DefaultButton>
      </ModalInputForm.Form>
    </AnimatePresence>
  );
}

ModalInputForm.Form = styled(motion.form)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;

  padding: 0 20px;

  border-radius: 28px;
  background-color: ${(props) => props.theme.color.sub[100]};
`;
