import { Container, TagTitle } from './style'

interface ITag {
  titleTag: string
  bg: string
  bd: string
}

export function Tag({ titleTag, bg, bd }: ITag) {
  return (
    <Container bg={bg} bd={bd}>
      <TagTitle>{titleTag}</TagTitle>
    </Container>
  )
}
