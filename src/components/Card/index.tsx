import {
  Container,
  Wrapper,
  WrapperS,
  TitleCard,
  DescriptonCard,
} from './style'

interface ICard {
  icon: any
  bg: string
  bd: string
  title: string
  descripton: string
}
export function Card({ icon, title, descripton, bg, bd }: ICard) {
  return (
    <Container bd={bd}>
      <Wrapper bg={bg}>
        <img src={icon} alt="" />
      </Wrapper>
      <WrapperS>
        <TitleCard>{title}</TitleCard>
        <DescriptonCard>{descripton}</DescriptonCard>
      </WrapperS>
    </Container>
  )
}
