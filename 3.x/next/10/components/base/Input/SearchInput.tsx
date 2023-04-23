import React, { useRef } from 'react';
import { DefaultInput } from './DefaultInput';
import styled, { useTheme } from 'styled-components';
import { DefaultImage } from '../Image/DefaultImage';
import { CancelButton } from '../Button/CancelButton';
import { IBaseInput } from './types';
import { v4 as uuidv4 } from 'uuid';

interface ISearchInput extends IBaseInput {
  cancelButtonVisible?: boolean;
  onInitializeInput?: () => void;
}

export default function SearchInput({
  onChange,
  id,
  placeholder,
  cancelButtonVisible,
  onInitializeInput,
  value,
  autoFocus,
}: ISearchInput) {
  const theme = useTheme();

  const inputId = useRef(id ?? uuidv4());

  return (
    <SearchInput.Label htmlFor={inputId.current}>
      <DefaultImage
        src="/common/search.svg"
        alt="검색"
        width="20px"
        height="20px"
      />

      <DefaultInput
        id={inputId.current}
        placeholder={placeholder}
        onChange={onChange}
        flex="1"
        margin="0 0 0 10px"
        fontFamily={theme.fontFamily.notoSansKR}
        fontSize={theme.fontSize.md}
        fontWeight="700"
        fontStretch="normal"
        fontStyle="normal"
        letterSpacing="normal"
        color={theme.color.sub[400]}
        backgroundColor="transparent"
        value={value}
        autoFocus
      />

      {cancelButtonVisible && <CancelButton onClick={onInitializeInput} />}
    </SearchInput.Label>
  );
}

SearchInput.Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.sub[100]};
`;
