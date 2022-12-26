import {
  Container,
  Wrapper,
  WrapperS,
  TitleCard,
  DescriptonCard,
  DescriptonCard2,
} from './style'

interface ICard {
  icon: any
  bg: string
  bd: string
  ct: string
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
  ct,
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
        <DescriptonCard2 ct={ct}>{visualizar}</DescriptonCard2>
      </WrapperS>
    </Container>
  )
}
