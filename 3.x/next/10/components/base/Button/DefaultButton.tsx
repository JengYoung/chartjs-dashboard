import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IDefaultButtonBaseProps {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
}
interface IDefaultButton extends IDefaultButtonBaseProps {
  position?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  border?: string;
  background?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  disabledColor?: string;
  disabledBackgroundColor?: string;
}

interface IDefaultButtonStyle extends IDefaultButtonBaseProps {
  $position?: string;
  $width?: string;
  $height?: string;
  $margin?: string;
  $padding?: string;
  $border?: string;
  $background?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $color?: string;
  $borderRadius?: string;
  $backgroundColor?: string;
  $disabledColor?: string;
  $disabledBackgroundColor?: string;
}

export function DefaultButton({
  className,
  position,
  width,
  height,
  margin,
  padding,
  border = 'none',
  borderRadius,
  background,
  backgroundColor,
  ariaLabel,
  onClick,
  onSubmit,
  children,
  fontSize,
  fontWeight,
  color,
  disabled = false,
  disabledColor,
  disabledBackgroundColor,
}: IDefaultButton) {
  return (
    <DefaultButton.Style
      className={className}
      $position={position}
      $width={width}
      $height={height}
      $margin={margin}
      $padding={padding}
      $border={border}
      $borderRadius={borderRadius}
      $background={background}
      $backgroundColor={backgroundColor}
      aria-label={ariaLabel}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $color={color}
      $disabledColor={disabledColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 1.05 }}
    >
      {children}
    </DefaultButton.Style>
  );
}

DefaultButton.Style = styled(motion.button)<IDefaultButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.$position};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  padding: ${(props) => props.$padding};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.$border};
  background-color: ${(props) => props.$backgroundColor};
  background: ${(props) => props.$background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.$fontSize};
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: ${(props) => props.$disabledBackgroundColor};
    color: ${(props) => props.$disabledColor};
  }
`;
