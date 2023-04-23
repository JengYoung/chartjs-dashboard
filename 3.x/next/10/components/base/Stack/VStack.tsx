import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface IVStack {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  spacing?: string;
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
}

interface IVStackStyle {
  $width?: string;
  $height?: string;
  $margin?: string;
  $padding?: string;
  $spacing?: string;
  $justifyContent?: string;
  $alignItems?: string;
}

export default function VStack({ width = '100%', height, spacing, margin, padding, alignItems, justifyContent, children }: IVStack) {
  return (
    <VStack.Style 
      $width={width}
      $height={height}
      $margin={margin} 
      $padding={padding} 
      $spacing={spacing} 
      $alignItems={alignItems} 
      $justifyContent={justifyContent}
    >
      {children}
    </VStack.Style>
  )
}

VStack.Style = styled.div<IVStackStyle>`
  display: flex;
  flex-direction: column;

  width: ${props => props.$width};
  height: ${props => props.$height};

  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};

  margin: ${props => props.$margin};
  padding: ${props => props.$padding};

  * {
    margin: ${props => props.$spacing};
  }
`
