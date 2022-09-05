import { Button } from '../Button'
import { Github } from '../Github'
import { Linkedin } from '../Linkedin'
import { Container, Nav } from './style'

export function Header() {
  return (
    <Container>
      <Nav>Home</Nav>
      <Nav>Sobre</Nav>
      <Nav>Projetos</Nav>
      <Button
        titleBtn={'Contato'}
        size={102}
        link={'https://api.whatsapp.com/send?phone=5581991431834'}
      />
      <Github link={'https://github.com/Joanderson337'} size={35} />
      <Linkedin
        link={'https://www.linkedin.com/in/joandersonsilva337/'}
        size={35}
      />
    </Container>
  )
}
