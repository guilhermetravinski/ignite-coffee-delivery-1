import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;

  padding: 0 0 1.25rem;

  > img {
    display: block;
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -1.25rem;
  }

  > div {
    display: flex;
    gap: 0.75rem;

    > span {
      margin-top: 0.75rem;
      padding: 0.25rem 0.5rem;

      border-radius: 100px;

      background: ${(props) => props.theme.colors['brand-yellow-light']};
      color: ${(props) => props.theme.colors['brand-yellow-dark']};

      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 0.8125rem;
    }
  }

  > strong {
    margin-top: 1rem;

    color: ${(props) => props.theme.colors['base-subtitle']};

    font-weight: 700;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }

  > p {
    margin-top: 0.5rem;
    max-width: 13.5rem;

    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: center;

    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const CardFooter = styled.footer`
  margin-top: 2.0625rem;

  display: flex;
  gap: 1.4375rem;

  > strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.9375rem;
    color: ${(props) => props.theme.colors['base-text']};

    &::before {
      content: 'R$ ';
      font-family: ${(props) => props.theme.fonts.regular}, sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.125rem;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;

    > button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.375rem;
      height: 2.375rem;

      padding: 0.5rem;

      border: none;
      border-radius: 6px;

      background: ${(props) => props.theme.colors['brand-purple-dark']};
      color: ${(props) => props.theme.colors['base-card']};

      transition: background-color 0.2s;

      &:hover {
        background: ${(props) => props.theme.colors['brand-purple']};
      }
    }
  }
`
