/* eslint-disable prettier/prettier */
import styled from 'styled-components'

type InputContainerProps = {
  inputSize: 'small' | 'regular' | 'large'
  hasError: boolean
}

export const InputContainer = styled.input<InputContainerProps>`
  padding: 0.75rem;
  background: ${(props) => props.theme.colors['base-input']};
  color: ${(props) => props.theme.colors['base-text']};
  border: 1px solid
    ${({ theme, hasError }) =>
    hasError ? 'red' : theme.colors['base-button']};
  border-radius: 4px;

  transition: border-color 0.2s;

  width: ${({ inputSize }) => {
    if (inputSize === 'small') {
      return '3.75rem'
    } else if (inputSize === 'regular') {
      return '12.5rem'
    } else {
      return '100%'
    }
  }};

  :focus {
    border: 1px solid ${(props) => props.theme.colors['brand-yellow-dark']};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
