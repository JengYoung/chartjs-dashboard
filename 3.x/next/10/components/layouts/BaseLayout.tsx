import React, { ReactNode } from 'react'
import Header from '../Header'

interface IBaseLayout {
  children: ReactNode;
}

export function BaseLayout({ children }: IBaseLayout) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
