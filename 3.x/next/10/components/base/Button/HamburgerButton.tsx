import React from 'react';
import styled, { css, useTheme } from 'styled-components';

interface IHamburgerButton {
  ariaLabel?: string;
  color?: string;
}

interface ILineStyle {
  $color: string;
}

export function HamburgerButton({ ariaLabel, color }: IHamburgerButton) {
  const theme = useTheme();

  const lineColor = color ?? theme.color.white;

  return (
    <HamburgerButton.Container aria-label={ariaLabel}>
      <HamburgerButton.Top $color={lineColor} />
      <HamburgerButton.Middle $color={lineColor} />
      <HamburgerButton.Bottom $color={lineColor} />
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

HamburgerButton.Top = styled.div<ILineStyle>`
  ${HamburgerLineCSS}
  margin: 0 0 4px;
  background-color: ${props => props.$color};
`;

HamburgerButton.Middle = styled.div<ILineStyle>`
  ${HamburgerLineCSS}
  margin: 4px 0;
  background-color: ${props => props.$color};
`;

HamburgerButton.Bottom = styled.div<ILineStyle>`
  ${HamburgerLineCSS}
  margin: 4px 0 0;
  background-color: ${props => props.$color};
`;
