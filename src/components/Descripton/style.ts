import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 419px;
  @media (max-width: 568px) {
    max-width: 319px;
  }
`

export const DescriptionS = styled.p`
  font-size: 18px;
  line-height: 144.69%;
  color: ${({ theme }) => theme.WHILE_100};
  @media (max-width: 568px) {
    font-size: 87.5%;
  }
`
