import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputSize: 'small' | 'regular' | 'large'
}

export function Input({ inputSize, ...rest }: InputProps) {
  return <InputContainer inputSize={inputSize} {...rest} />
}
