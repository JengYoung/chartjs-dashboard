import { IBorder } from '#/types/style'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IHStack {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  spacing?: string;
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
  border?: IBorder;
}

interface IHStackStyle {
  $width?: string;
  $height?: string;
  $margin?: string;
  $padding?: string;
  $spacing?: string;
  $justifyContent?: string;
  $alignItems?: string;
  $border: IBorder;
}

export default function HStack({ 
  width = '100%', 
  height, 
  spacing, 
  margin, 
  padding, 
  alignItems, 
  justifyContent, 
  border, 
  children 
}: IHStack) {
  return (
    <HStack.Style
      $width={width}
      $height={height}
      $margin={margin} 
      $padding={padding} 
      $spacing={spacing} 
      $alignItems={alignItems} 
      $justifyContent={justifyContent}
      $border={{
        top: undefined,
        right: undefined,
        bottom: undefined,
        left: undefined,
        ...border
      }}
    >
      {children}
    </HStack.Style>
  )
}

HStack.Style = styled.div<IHStackStyle>`
  display: flex;

  width: ${props => props.$width};
  height: ${props => props.$height};

  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};

  margin: ${props => props.$margin};
  padding: ${props => props.$padding};

  * {
    margin: ${props => props.$spacing};
  }
  
  border-top: ${props => props.$border.top};
  border-right: ${props => props.$border.right};
  border-bottom: ${props => props.$border.bottom};
  border-left: ${props => props.$border.left};
`
