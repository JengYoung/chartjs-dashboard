import React from 'react';
import styled, { css } from 'styled-components';

interface IHamburgerButton {
  ariaLabel?: string;
}

export function HamburgerButton({ ariaLabel }: IHamburgerButton) {
  return (
    <HamburgerButton.Container aria-label={ariaLabel}>
      <HamburgerButton.Top />
      <HamburgerButton.Middle />
      <HamburgerButton.Bottom />
    </HamburgerButton.Container>
  );
}

const HamburgerLineCSS = css`
  width: 17px;
  height: 2px;
  background-color: #000;
`;

HamburgerButton.Container = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
`;

HamburgerButton.Top = styled.div`
  ${HamburgerLineCSS}
  margin: 0 0 4px;
`;

HamburgerButton.Middle = styled.div`
  ${HamburgerLineCSS}
  margin: 4px 0;
`;

HamburgerButton.Bottom = styled.div`
  ${HamburgerLineCSS}
  margin: 4px 0 0;
`;
