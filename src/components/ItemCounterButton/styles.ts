import styled from 'styled-components'

export const ItemCounterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;

  background: ${(props) => props.theme['--base-button']};

  > button {
    color: ${(props) => props.theme['--brand-purple']};
    font-weight: bold;
    border: none;
    background: none;

    cursor: pointer;

    transition: background-color 0.5s;

    &:hover {
      color: ${(props) => props.theme['--brand-purple-dark']};
    }
  }

  > p {
    color: ${(props) => props.theme['--base-title']};
    line-height: 1.3125rem;
  }
`