import React from 'react';
import styled from 'styled-components';

interface IDefaultText {
  as?: "div" | "span" | "p";
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStretch?: string;
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  color?: string;
  children?: string;
  margin?: string;
}

export function DefaultText({
  as,
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
  margin = "0px",
}: IDefaultText) {
  return (
    <DefaultText.Style
      as={as}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontStretch={fontStretch}
      fontStyle={fontStyle}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      textAlign={textAlign}
      color={color}
      margin={margin}
    >
      {children}
    </DefaultText.Style>
  );
}

DefaultText.Style = styled.p<IDefaultText>`
  display: flex;
  align-items: center;
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-stretch: ${(props) => props.fontStretch};
  font-style: ${(props) => props.fontStyle};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;
