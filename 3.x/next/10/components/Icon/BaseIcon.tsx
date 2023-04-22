import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface IBaseIconStyle {
  width?: string;
  height?: string;
}

interface IBaseIcon extends IBaseIconStyle { 
  children: ReactNode;
};

export default function BaseIcon({ children, width = 'auto', height = 'auto' }: IBaseIcon) {
  return (
    <BaseIcon.Container width={width} height={height}>{children}</BaseIcon.Container>
  )
}


BaseIcon.Container = styled.div<IBaseIconStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: ${props => props.width};
  height: ${props => props.height};
`
