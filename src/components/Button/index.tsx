import { Container, TitleBtn } from './style'

interface IBtn {
  titleBtn: string
  size: number
  link: string
}

export function Button({ titleBtn, size, link, ...rest }: IBtn) {
  return (
    <Container href={link} size={size} {...rest} type="button" target="_blank">
      <TitleBtn>{titleBtn}</TitleBtn>
    </Container>
  )
}
