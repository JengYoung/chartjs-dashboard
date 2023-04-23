import React from 'react'
import BaseIcon, { IBaseIconStyle } from './BaseIcon'
import EditPancelSVG from '#/public/pencil-edit-button.svg';

export default function EditPancel({ width, height }: IBaseIconStyle) {
  return (
    <BaseIcon width={width} height={height}>
      <EditPancelSVG viewBox="0 0 800 800"/>
    </BaseIcon>
  )
}
