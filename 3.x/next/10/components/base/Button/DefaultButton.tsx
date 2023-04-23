import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface IDefaultButton {
  className?: string;
  children?: ReactNode;
  position?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  background?: string;
  backgroundColor?: string;
  ariaLabel?: string;
  keyIndex?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  disabledBackgroundColor?: string;
}

export default function DefaultButton({
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
  keyIndex,
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
      position={position}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      border={border}
      $borderRadius={borderRadius}
      background={background}
      $backgroundColor={backgroundColor}
      aria-label={ariaLabel}
      keyindex={keyIndex}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      $disabledColor={disabledColor}
      $disabledBackgroundColor={disabledBackgroundColor}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 1.05 }}
    >
      {children}
    </DefaultButton.Style>
  );
}

DefaultButton.Style = styled((props) => <motion.button {...props} />)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.$borderRadius};
  border: ${(props) => props.border};
  background-color: ${(props) => props.$backgroundColor};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: ${(props) => props.$disabledBackgroundColor};
    color: ${(props) => props.$disabledColor};
  }
`;
