import styled from 'styled-components'

type ITag = {
  bg: string
  bd: string
}

export const Container = styled.div<ITag>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, bg }) => theme[bg]};
  border: 0.2rem solid ${({ theme, bd }) => theme[bd]};
  border-radius: 1rem;

  width: 7.96rem;
  height: 3rem;
`
export const TagTitle = styled.h3`
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.WHILE_100};
`
