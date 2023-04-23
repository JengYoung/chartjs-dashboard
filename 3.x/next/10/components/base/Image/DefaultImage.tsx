import React from 'react';
import styled from 'styled-components';

interface IDefaultImage extends IDefaultImageStyle{
  src?: string;
  alt?: string;
  srcset?: string;
  sizes?: string;
}

interface IDefaultImageStyle { 
  width?: string;
  height?: string;
  margin?: string;
  objectFit?: 'cover' | 'contain' | 'fill'
}

export function DefaultImage({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  margin = 'auto',
  objectFit = 'fill',
  srcset,
  sizes,
}: IDefaultImage) {
  return (
    <DefaultImage.Container
      src={src}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
      objectFit={objectFit}
      srcSet={srcset}
      sizes={sizes}
    />
  );
}

DefaultImage.Container = styled.img<IDefaultImageStyle>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: ${(props) => props.objectFit};
`;
