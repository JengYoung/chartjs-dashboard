import React from 'react'
import BaseIcon, { IBaseIconStyle } from '#/components/Icon/BaseIcon';
import LogoSVG from '#/assets/logo.svg'

export default function Logo({ width, height }: IBaseIconStyle) {
  return (
    <BaseIcon width={width} height={height}>
      <LogoSVG viewBox="0 0 512 512"/>
    </BaseIcon>
  )
}
