import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
`
export const TextTag = styled.strong`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 144.69%;
  color: ${({ theme }) => theme.GREEN_200};
  @media (max-width: 568px) {
    font-size: 87.5%;
  }
`
