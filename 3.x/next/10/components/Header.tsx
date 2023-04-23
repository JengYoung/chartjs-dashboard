import React from 'react'
import styled, { useTheme } from 'styled-components'
import { DefaultText } from './base/Text/DefaultText'
import Logo from './base/Icon/Logo'
import { DefaultButton } from './base';


function RightButtons() {
  return (
    <RightButtons.Container>
      <DefaultButton>로그인</DefaultButton>
    </RightButtons.Container>
  )
}

RightButtons.Container = styled.ul`
  display: flex;
  margin-left: auto;
`

export default function Header() {
  const theme = useTheme();

  return (
    <Header.Container>
      <Header.LogoContainer>
        <Logo width="40px" height='40px' />
        <DefaultText color={theme.color.white} fontWeight='700' margin="0 0 0 10px" fontSize="24px">DashBoard</DefaultText>
      </Header.LogoContainer>

      <div>
        <RightButtons />
      </div>
    </Header.Container>
  )
}

Header.Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color.primary['500']};
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.1);
`


Header.LogoContainer = styled.div`
  display: flex;
`

Header.RightButtons = RightButtons;
