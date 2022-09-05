import styled from 'styled-components'

export type IBtnContainer = {
  size: number
}

export const Container = styled.a<IBtnContainer>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => `${props.size}px`};
  height: 4rem;

  background-color: ${({ theme }) => theme.GREEN_100};
  border-radius: 0.5rem;
`
export const TitleBtn = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: ${({ theme }) => theme.WHILE_100};
`
