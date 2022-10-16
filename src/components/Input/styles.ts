/* eslint-disable prettier/prettier */
import styled from 'styled-components'

type InputContainerProps = {
  inputSize: 'small' | 'regular' | 'large'
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  padding: 0.75rem;
  width: ${({ inputSize }) => {
    if (inputSize === 'small') {
      return '3.75rem'
    } else if (inputSize === 'regular') {
      return '12.5rem'
    } else {
      return '100%'
    }
  }};

  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};
  border: 1px solid
  ${({ theme, hasError }) =>
    hasError ? 'red' : theme.colors['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: border-color 0.2s;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const InputStyled = styled.input`
  background: none;
  border: none;

  font-size: 0.875rem;
  line-height: 1.125rem;
`

export const RightText = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  line-height: 1rem;

  color: ${props => props.theme.colors['base-label']};
`
