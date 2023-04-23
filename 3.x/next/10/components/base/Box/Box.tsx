import { IBorder } from '#/types/style'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IBox {
  width?: string;
  height?: string;
  display?: string;
  position?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  children?: ReactNode;
  border?: IBorder;
  flex?: string;
  flexShrink?: string;
}

interface IBoxStyle {
  $width?: string;
  $height?: string;
  $display?: string;
  $position?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $margin?: string;
  $padding?: string;
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: string;
  $border: IBorder;
  $flex?: string;
  $flexShrink?: string;
}

export default function Box({
  display = 'block',
  position,
  width = '100%',
  height = '100%',
  justifyContent,
  alignItems,
  margin,
  padding,
  backgroundColor,
  color,
  fontSize,
  fontWeight,
  textAlign,
  children,
  border,
  flex,
  flexShrink
}: IBox) {
  return (
    <Box.Style
      $width={width}
      $height={height}
      $display={display}
      $position={position}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $margin={margin}
      $padding={padding}
      $backgroundColor={backgroundColor}
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      $textAlign={textAlign}
      $border={{
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined,
        ...border
      }}
      $flex={flex}
      $flexShrink={flexShrink}
    >{children}</Box.Style>
  )
}

Box.Style = styled.div<IBoxStyle>`
  width: ${props => props.$width};
  height: ${props => props.$height};
  display: ${props => props.$display};
  position: ${props => props.$position};
  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};
  margin: ${props => props.$margin};
  padding: ${props => props.$padding};
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$color};
  font-size: ${props => props.$fontSize};
  font-weight: ${props => props.$fontWeight};
  text-align: ${props => props.$textAlign};

  border-top: ${props => props.$border.top};
  border-right: ${props => props.$border.right};
  border-bottom: ${props => props.$border.bottom};
  border-left: ${props => props.$border.left};
  flex: ${props => props.$flex};
  flex-shrink: ${props => props.$flexShrink};
`
