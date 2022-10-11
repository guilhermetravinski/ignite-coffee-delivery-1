import styled from 'styled-components'

export const HomeContainer = styled.main`
  max-width: 72rem;
  margin: 0 auto 9.75rem;

  padding: 0 1rem;
`

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  padding: 12.25rem 0 6.75rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const IntroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  div {
    > h1 {
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.875rem;
      color: ${(props) => props.theme['--base-title']};
      font-family: 'Baloo 2', cursive;
    }

    > p {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['--base-subtitle']};
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 14.5rem 1fr;
    grid-row-gap: 1.25rem;
    grid-column-gap: 2.5rem;
  }
`

type IntroLeftListItemProps = {
  iconType: 'cart' | 'package' | 'timer' | 'coffee'
}

const IconBgByIconType = {
  cart: '--brand-yellow-dark',
  package: '--base-text',
  timer: '--brand-yellow',
  coffee: '--brand-purple',
}

export const IntroLeftListItem = styled.li<IntroLeftListItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  p {
    line-height: 21px;
  }

  svg {
    padding: 0.5rem;
    border-radius: 9999px;
    color: ${(props) => props.theme['--base-background']};
    background: ${(props) => props.theme[IconBgByIconType[props.iconType]]};
  }
`
