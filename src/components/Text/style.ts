import styled from 'styled-components'

type Ititle = {
  size: number
  weight: number
  cl: string
  sizeW: number
}

export const TextS = styled.h2<Ititle>`
  font-weight: ${(props) => `${props.weight}px`};
  font-size: ${(props) => `${props.size}px`};
  line-height: 4.2rem;
  color: ${({ theme, cl }: any) => theme[cl]};
  @media (max-width: 568px) {
    font-size: ${(props) => `${props.sizeW}px`};
  }
`
