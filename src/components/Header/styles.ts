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

  a {
    width: 84.95px;
    height: 2.5rem;
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
`
