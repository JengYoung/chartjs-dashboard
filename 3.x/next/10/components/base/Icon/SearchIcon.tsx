import React from 'react'
import SearchSVG from '#/public/search.svg';
import BaseIcon, { IBaseIconStyle } from './BaseIcon';

export default function SearchIcon({ width, height }: IBaseIconStyle) {
  return (
    <BaseIcon width={width} height={height}>
      <SearchSVG viewBox='0 0 500 500'/>
    </BaseIcon>
  )
}
