import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  background: ${(props) => props.theme['--base-background']};

  position: fixed;

  padding: 2rem 0;
`

export const HeaderContainer = styled.header`
  max-width: 70rem;
  padding: 0 1rem;
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
