import React from 'react';
import styled from 'styled-components';
import { IBaseInput } from './types';

interface IDefaultInputStyle {
  display?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontFamily?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  color?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  border?: string;
  flex?: string;
  backgroundColor?: string;
}

interface IDefaultInput extends IDefaultInputStyle, IBaseInput {
  id?: string
  placeholder?: string;
  onChange?: () => void;
  value?: string;
  autoFocus?: boolean;
}

export function DefaultInput({
  id,
  placeholder,
  onChange,
  display,
  width,
  height,
  fontSize,
  fontWeight,
  fontFamily,
  fontStyle,
  fontStretch,
  letterSpacing,
  color,
  borderRadius,
  padding,
  margin,
  border = 'none',
  flex,
  backgroundColor = 'transparent',
  value,
  autoFocus,
}: IDefaultInput) {
  return (
    <DefaultInput.Style
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      display={display}
      width={width}
      height={height}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      fontStretch={fontStretch}
      fontStyle={fontStyle}
      letterSpacing={letterSpacing}
      color={color}
      borderRadius={borderRadius}
      padding={padding}
      margin={margin}
      border={border}
      flex={flex}
      backgroundColor={backgroundColor}
      value={value}
      autoFocus={autoFocus}
    />
  );
}

DefaultInput.Style = styled.input<IDefaultInputStyle>`
  display: ${(props) => props.display};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  font-stretch: ${(props) => props.fontStretch};
  font-style: ${(props) => props.fontStyle};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
  flex: ${(props) => props.flex};
  outline: none;
  background-color: ${(props) => props.backgroundColor};

  ::placeholder {
    color: ${(props) => props.theme.color.sub[400]};
  }
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.color.sub[400]};
  }
  ::-ms-input-placeholder {
    color: ${(props) => props.theme.color.sub[400]};
  }
`;
