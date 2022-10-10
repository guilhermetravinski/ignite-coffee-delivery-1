/* eslint-disable prettier/prettier */
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

type GoToCheckoutButtonContainerProps = {
  isHeader?: boolean
}

export const GoToCheckoutButtonContainer = styled(
  NavLink,
) <GoToCheckoutButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 2.375rem;
  max-height: 2.375rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme[props.isHeader ? '--brand-yellow-light' : '--brand-purple-dark']};
  color: ${(props) => props.theme[props.isHeader ? '--brand-yellow-dark' : '--base-card']};

cursor: pointer;
`
