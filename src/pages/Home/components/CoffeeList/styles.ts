import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin-top: 6.75rem;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.625rem;

    margin-bottom: 3.375rem;
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
  }

  @media (max-width: 720px) {
    > ul {
      grid-template-columns: 1fr;
    }
  }
`
