import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 72rem;

  background: ${(props) => props.theme['--base-background']};

  position: fixed;
  z-index: 2;

  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    width: 84.95px;
    height: 2.5rem;
  }

  > div {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 720px) {
    & {
      max-width: 62rem;
    }
  }
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['--brand-purple-light']};

  > span {
    color: ${(props) => props.theme['--brand-purple-dark']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }

  > svg {
    color: ${(props) => props.theme['--brand-purple']};
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

  background: ${(props) => props.theme['--brand-yellow-light']};
  color: ${(props) => props.theme['--brand-yellow-dark']};

  cursor: pointer;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 9999px;

    background: ${(props) => props.theme['--brand-yellow-dark']};
    color: ${(props) => props.theme['--white']};

    top: -0.625rem;
    right: -0.625rem;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`
