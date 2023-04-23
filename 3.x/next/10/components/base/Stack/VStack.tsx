import { IBorder } from '#/types/style'
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
  border?: IBorder;
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
  $border: IBorder;
}

export default function VStack({ width = '100%', height, spacing, margin, padding, alignItems, justifyContent, border, children }: IVStack) {
  return (
    <VStack.Style 
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

  border-top: ${props => props.$border.top};
  border-right: ${props => props.$border.right};
  border-bottom: ${props => props.$border.bottom};
  border-left: ${props => props.$border.left};

  * {
    margin: ${props => props.$spacing};
  }
`
