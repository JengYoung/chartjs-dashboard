import React from 'react'
import styled from 'styled-components'
import Logo from './Icon/Logo'

export default function Header() {
  return (
    <Header.Container>
      <Logo width="40px" height='40px'></Logo>
    </Header.Container>
  )
}

Header.Container = styled.div`
  background-color: ${props => props.theme.color.primary['500']};
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.1);
`
