import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a > img {
    width: 84.95px;
    height: 40px;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  div > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme['--brand-purple-light']};
  }

  div > div > span {
    color: ${(props) => props.theme['--brand-purple-dark']};

    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
  }

  div > div > svg {
    color: ${(props) => props.theme['--brand-purple']};
  }

  div > a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;

    border: none;
    border-radius: 6px;

    background: ${(props) => props.theme['--brand-yellow-light']};
    color: ${(props) => props.theme['--brand-yellow-dark']};

    cursor: pointer;
  }
`