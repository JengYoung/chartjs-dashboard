import React from 'react'
import styled, { useTheme } from 'styled-components'
import { DefaultText } from './base/Text/DefaultText'
import Logo from './base/Icon/Logo'
import { DefaultButton, HamburgerButton } from './base';


function RightButtons() {
  const theme = useTheme();

  return (
    <RightButtons.Container>
      <DefaultButton color={theme.color.white}>로그인</DefaultButton>
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
      <HamburgerButton ariaLabel='메뉴 열기' color={theme.color.white} />

      <Header.LogoContainer>        
        <Logo width="32px" height='32px' />
        <DefaultText 
          color={theme.color.white} 
          fontWeight='700' 
          margin="0 0 0 10px" 
          fontSize="20px"
        >
          JengYoung
        </DefaultText>
      </Header.LogoContainer>

      <RightButtons />
    </Header.Container>
  )
}

Header.Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.color.primary[500]};
  width: 100%;
  height: 50px;
  padding: 0 20px;
  box-shadow: 0 0 4px 4px rgba(0,0,0,0.1);
`


Header.LogoContainer = styled.div`
  margin-left: 10px;
  display: flex;
`

Header.RightButtons = RightButtons;
