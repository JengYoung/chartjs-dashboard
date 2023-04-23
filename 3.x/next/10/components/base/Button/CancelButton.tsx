import React from 'react';
import { DefaultButton } from './DefaultButton';
import styled, { useTheme } from 'styled-components';

interface ICancelButton {
  onClick?: () => void;
}

export function CancelButton({ onClick }: ICancelButton) {
  const theme = useTheme();
  return (
    <DefaultButton
      position="relative"
      width="18px"
      height="18px"
      borderRadius="50%"
      backgroundColor={theme.color.sub[900]}
      onClick={onClick}
    >
      <CancelButton.Line />
      <CancelButton.Line />
    </DefaultButton>
  );
}

CancelButton.Line = styled.div`
  position: absolute;
  width: 10px;
  height: 2px;
  background-color: ${(props) => props.theme.color.white};

  &:first-of-type {
    transform-origin: top-right;
    transform: rotate(-45deg);
  }

  &:last-of-type {
    transform-origin: top-left;
    transform: rotate(45deg);
  }
`;
