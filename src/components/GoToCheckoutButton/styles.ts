import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const GoToCheckoutButtonContainer = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 2.375rem;
  max-height: 2.375rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['--brand-yellow-light']};
  color: ${(props) => props.theme['--brand-yellow-dark']};

  cursor: pointer;
`
