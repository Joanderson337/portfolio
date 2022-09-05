import styled from 'styled-components'

type IContainer = {
  bd: string
}

type IWrapper = {
  bg: string
}

export const Container = styled.div<IContainer>`
  position: relative;
  width: 100%;
  max-width: 34.038rem;
  height: 34.6rem;

  background-color: ${({ theme }) => theme.BLACK_200};
  border-radius: 1rem;
  border-bottom: 2rem solid ${({ theme, bd }: any) => theme[bd]};
`

export const Wrapper = styled.div<IWrapper>`
  position: absolute;
  top: 3rem;
  left: 3.7rem;

  width: 8rem;
  height: 8rem;

  background-color: ${({ theme, bg }: any) => theme[bg]};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const WrapperS = styled.div`
  position: absolute;
  top: 14.4rem;
  left: 4.2rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
export const TitleCard = styled.h3`
  font-size: 1.8rem;
  line-height: 2.1rem;
  font-weight: 900;
  color: ${({ theme }) => theme.WHILE_100};
`
export const DescriptonCard = styled(TitleCard)`
  font-weight: 500;
  font-size: 1.5rem;
  width: 100%;
  max-width: 26.7rem;
`
