import React, { ReactNode } from 'react'
import styled from 'styled-components'
import Header from '../Header'

interface IBaseLayout {
  children: ReactNode;
}

export function BaseLayout({ children }: IBaseLayout) {
  return (
    <BaseLayout.Style>
      <Header />
      {children}
    </BaseLayout.Style>
  )
}

BaseLayout.Style = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`
