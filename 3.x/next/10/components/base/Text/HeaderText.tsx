import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IHeaderTextStyle {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  width?: string;
  height?: string;
  margin?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStretch?: string;
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  color?: string;
  children?: ReactNode;
}

export default function HeaderText({
  as,
  width,
  height,
  margin,
  fontFamily,
  fontSize,
  fontWeight,
  fontStretch,
  fontStyle,
  lineHeight,
  letterSpacing,
  textAlign,
  color,
  children,
}: IHeaderTextStyle) {
  return (
    <HeaderText.Style
      as={as}
      width={width}
      height={height}
      margin={margin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStretch={fontStretch}
      fontStyle={fontStyle}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      color={color}
    >
      {children}
    </HeaderText.Style>
  );
}

HeaderText.Style = styled.h4<IHeaderTextStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-stretch: ${(props) => props.fontStretch};
  font-style: ${(props) => props.fontStyle};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
`;
