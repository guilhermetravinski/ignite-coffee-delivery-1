import styled from 'styled-components'

export const OrderCompletedContainer = styled.main`
  width: 100%;
  margin: 0 auto 9.75rem;
  padding: 0 1rem;

  position: relative;
  top: 11.5rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitlesContainer = styled.div`
  > h1 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.625rem;
    font-family: 'Baloo 2', cursive;

    color: ${(props) => props.theme['--brand-yellow-dark']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['--base-subtitle']};
  }
`

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 6.375rem;

  > div {
    width: 32.875rem;
    height: 16.875rem;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;

    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(#dbac2c, #8047f8) 100;
    border-radius: 6px 36px;
  }

  > img {
    height: 18.3125rem;
    width: 30.75rem;
  }
`

type InfoContainerProps = {
  isDarkIcon?: boolean
  variant: 'purple' | 'yellow'
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2rem;
    width: 2rem;
    padding: 0.5rem;

    border-radius: 50%;

    color: ${(props) => props.theme['--base-background']};
    background: ${(props) =>
    props.theme[
    props.isDarkIcon
      ? `--brand-${props.variant}-dark`
      : `--brand-${props.variant}`
    ]};
  }

  > div {
    > p {
      font-weight: 400;
      line-height: 1.3125rem;
      color: ${(props) => props.theme['--base-text']};
    }

    strong {
      font-weight: 700;
      line-height: 1.3125rem;
      color: ${(props) => props.theme['--base-text']};
    }
  }
`