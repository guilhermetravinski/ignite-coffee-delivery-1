import styled from 'styled-components'

type RoundedIconContainerProps = {
  bgColor: string
}

export const RoundedIconContainer = styled.div<RoundedIconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  background: ${({ bgColor }) => bgColor};

  > svg {
    color: ${(props) => props.theme.colors['base-background']};
    width: 1rem;
    height: 1rem;
  }
`
