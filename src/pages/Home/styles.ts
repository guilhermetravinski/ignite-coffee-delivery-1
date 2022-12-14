import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 9.75rem;
  margin-top: 5.875rem;
  padding: 0 1rem;
`

export const IntroContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media (max-width: 720px) {
    > img {
      display: none;
    }
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
      color: ${(props) => props.theme.colors['base-title']};
    }

    > p {
      margin-top: 1rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 14.5rem 1fr;
    grid-row-gap: 1.25rem;
    grid-column-gap: 2.5rem;

    @media (max-width: 720px) {
      & {
        grid-template-columns: 1fr;
      }
    }
  }
`

export const IntroLeftListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  p {
    line-height: 21px;
  }
`
