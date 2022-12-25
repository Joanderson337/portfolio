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
  link: string
  tecnologia: string
  visualizar: string
}
export function CardProject({
  icon,
  title,
  descripton,
  bg,
  bd,
  link,
  tecnologia,
  visualizar,
}: ICard) {
  return (
    <Container bd={bd} href={link} target="_blank">
      <Wrapper bg={bg}>
        <img src={icon} alt="" />
      </Wrapper>
      <WrapperS>
        <TitleCard>{title}</TitleCard>
        <DescriptonCard>{descripton}</DescriptonCard>
        <DescriptonCard>{tecnologia}</DescriptonCard>
        <DescriptonCard>{visualizar}</DescriptonCard>
      </WrapperS>
    </Container>
  )
}
