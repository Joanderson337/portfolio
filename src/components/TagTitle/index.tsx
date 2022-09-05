import { Container, TextTag } from './style'
import { Rectangle } from '../../assets/Rectangle'

interface ITag {
  titleTag: string
}

export function TagTitle({ titleTag }: ITag) {
  return (
    <Container>
      <TextTag>{titleTag}</TextTag>
      <Rectangle />
    </Container>
  )
}
