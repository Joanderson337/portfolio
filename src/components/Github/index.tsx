import { Container } from './style'
import { GithubLogo } from 'phosphor-react'

interface IGithub {
  link: string
  size: number
}

export function Github({ link, size }: IGithub) {
  return (
    <Container href={link}>
      <GithubLogo size={size} />
    </Container>
  )
}
