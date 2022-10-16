import styled from 'styled-components'

export const CartContainer = styled.main`
  margin-bottom: 9.75rem;
  margin-top: 2.5rem;
  padding: 0 1rem;

  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 40rem;

  display: flex;
  flex-direction: column;

  > form {
    margin-top: 0.9375rem;

    background-color: ${(props) => props.theme.colors['base-card']};
    border-radius: 6px;
    padding: 2.5rem;
  }
`
