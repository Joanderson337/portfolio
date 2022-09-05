import { Container } from './style'
import { LinkedinLogo } from 'phosphor-react'

interface ILinkedin {
  link: string
  size: number
}

export function Linkedin({ link, size }: ILinkedin) {
  return (
    <Container href={link}>
      <LinkedinLogo size={size} />
    </Container>
  )
}
