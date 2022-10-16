import styled from 'styled-components'

export const DeliveryAddressFormContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    gap: 0.75rem;
  }

  @media (max-width: 720px) {
    flex-direction: column;

    > div {
      flex-direction: column;
    }

    input {
      width: 100%;
    }
  }
`
