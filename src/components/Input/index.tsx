/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer, InputStyled, RightText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize: 'small' | 'regular' | 'large'
  error?: string
  isOptional?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, error, isOptional, ...rest }, ref) => {
    return (
      <InputContainer inputSize={inputSize} hasError={!!error}>
        <InputStyled ref={ref} {...rest} />
        {isOptional && <RightText>{'Opcional'}</RightText>}
      </InputContainer>
    )
  },
)
