import { Frame } from '../../assets/Frame'
import { PhotoPerfil } from '../../assets/PhotoPerfil'
import { Button } from '../../components/Button'
import { Description } from '../../components/Descripton'
import { Github } from '../../components/Github'
import { Linkedin } from '../../components/Linkedin'
import { ModalMobile } from '../../components/Modal'
import { TagTitle } from '../../components/TagTitle'
import { Text } from '../../components/Text'
import { Cards } from './components/Cards'
import { CardsProjects } from './components/CardsProject'
import { Container, HeaderC, Wrapper, About, Knowledge, Project } from './style'

export function Home() {
  return (
    <Container>
      <HeaderC>
        <div className="mobile">
          <ModalMobile />
        </div>
        <div className="desk">
          <nav>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
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
        </div>
      </HeaderC>
      <Wrapper>
        <section id="home">
          <Text
            titleText={'Olá mundo! 👋 Meu nome é '}
            size={18}
            cl={'WHILE_100'}
            weight={400}
            sizeW={14}
          />
          <Text
            titleText={'Joanderson'}
            size={72}
            cl={'WHILE_100'}
            weight={900}
            sizeW={40}
          />
          <div>
            <Text
              titleText={'DESENVOLVEDOR'}
              size={18}
              cl={'GREEN_200'}
              weight={900}
              sizeW={14}
            />
            <Description
              descriptonText={
                'Programador Front-end com foco no ecossistema do JavaScript.'
              }
            />
          </div>
          <Button
            titleBtn={'Sobre mim'}
            size={179}
            link={
              'https://drive.google.com/file/d/1FN74tJh70Y3pZnD5qHf8a5IQYfS1XjPG/view?usp=sharing'
            }
          />
        </section>
        <Frame />
      </Wrapper>
      <About>
        <PhotoPerfil />
        <section id="sobre">
          <TagTitle titleTag={'Quem sou eu '} />
          <Text
            titleText={'Sobre mim'}
            size={36}
            cl={'WHILE_100'}
            weight={900}
            sizeW={40}
          />
          <div className="aboutText">
            <Description
              descriptonText={
                'Olá, sou entusiasmado com novos desafios, o importante é fazer o que se gosta. Atualmente estudante de programação, área na qual estou procurando novos conhecimentos a cada dia.'
              }
            />
            <Button
              titleBtn={'Download CV'}
              size={179}
              link={
                'https://drive.google.com/file/d/1FN74tJh70Y3pZnD5qHf8a5IQYfS1XjPG/view?usp=sharing'
              }
            />
          </div>
        </section>
      </About>
      <Knowledge>
        <div className="knowledgeTag">
          <TagTitle titleTag={'O que eu sei'} />
          <Text
            titleText={'Conhecimentos'}
            size={36}
            cl={'WHILE_100'}
            weight={900}
            sizeW={16}
          />
        </div>
        <section className="cards">
          <div>
            <Cards />
          </div>
        </section>
      </Knowledge>
      <Project>
        <div id="projetos" className="knowledgeTag">
          <TagTitle titleTag={'Conheça alguns dos meus'} />
          <Text
            titleText={'Projetos desenvolvidos'}
            size={36}
            cl={'WHILE_100'}
            weight={900}
            sizeW={14}
          />
        </div>
        <section className="cards">
          <div>
            <CardsProjects />
          </div>
        </section>
      </Project>
    </Container>
  )
}
