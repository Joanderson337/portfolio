import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 27px;
  > nav {
    display: flex;
    gap: 47px;
    align-items: center;
    a {
      color: ${({ theme }) => theme.WHILE_100};
    }
  }
  > div {
    display: flex;
    gap: 13px;
  }
`
