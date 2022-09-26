import { Button } from '../Button'
import { Github } from '../Github'
import { Linkedin } from '../Linkedin'
import { Container } from './styled'

export function HeaderDesk() {
  return (
    <Container>
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Projetos</a>
        <Button
          titleBtn={'Contato'}
          size={82}
          link={'https://api.whatsapp.com/send?phone=5581991431834'}
        />
      </nav>
      <div>
        <Github link={'https://github.com/Joanderson337'} size={32} />
        <Linkedin
          link={'https://www.linkedin.com/in/joandersonsilva337/'}
          size={32}
        />
      </div>
    </Container>
  )
}
