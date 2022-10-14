import styled from 'styled-components'

export const ItemCounterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme.colors['base-button']};

  > button {
    color: ${(props) => props.theme.colors['brand-purple']};
    font-weight: bold;
    border: none;
    background: none;

    transition: background-color 0.5s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.colors['brand-purple-dark']};
    }
  }

  > p {
    color: ${(props) => props.theme.colors['base-title']};
    line-height: 1.3125rem;
  }
`
