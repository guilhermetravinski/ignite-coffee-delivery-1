import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
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
    grid-row-gap: 1.25rem;
  }
`
