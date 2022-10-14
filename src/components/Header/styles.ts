import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  background: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  > a {
    width: 5.309375rem;
    height: 2.5rem;
  }

  > div {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 720px) {
    & {
      width: 100%;
    }
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['brand-purple-light']};

  > span {
    color: ${(props) => props.theme.colors['brand-purple-dark']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }

  > svg {
    color: ${(props) => props.theme.colors['brand-purple']};
  }
`

export const GoToCartButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 2.375rem;
  height: 2.375rem;

  padding: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.colors['brand-yellow-light']};
  color: ${(props) => props.theme.colors['brand-yellow-dark']};

  cursor: pointer;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;

    background: ${(props) => props.theme.colors['brand-yellow-dark']};
    color: ${(props) => props.theme.colors.white};

    top: -0.625rem;
    right: -0.625rem;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
