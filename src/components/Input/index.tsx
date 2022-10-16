/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize: 'small' | 'regular' | 'large'
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize, error, ...rest }, ref) => {
    return (
      <InputContainer
        ref={ref}
        inputSize={inputSize}
        hasError={!!error}
        {...rest}
      />
    )
  },
)
