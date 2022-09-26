import { Frame } from '../../assets/Frame'
import { PhotoPerfil } from '../../assets/PhotoPerfil'
import { Button } from '../../components/Button'
import { Description } from '../../components/Descripton'
import { Modals } from '../../components/Modal'
import { TagTitle } from '../../components/TagTitle'
import { Text } from '../../components/Text'
import { Cards } from './components/Cards'
import { Container, HeaderC, Wrapper, About, Knowledge } from './style'

export function Home() {
  return (
    <Container>
      <HeaderC>
        <Modals />
      </HeaderC>
      <Wrapper>
        <section>
          <Text
            titleText={'Olá mundo! 👋 Meu nome é '}
            size={18}
            cl={'WHILE_100'}
            weight={400}
            sizeW={10}
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
              sizeW={10}
            />
            <Description
              descriptonText={
                'Programador Front-end com foco no ecossistema do JavaScript. Atualmente cursando tecnólogo Análise e Desenvolvimento de Sistemas.'
              }
            />
          </div>
          <Button titleBtn={'Sobre mim'} size={179} link={''} />
        </section>
        <Frame />
      </Wrapper>
      <About>
        <PhotoPerfil />
        <section>
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
                'https://drive.google.com/file/d/1j_xSnDhpqCoGMoCFLTIT6pxvh-Ggdyp-/view?usp=sharing'
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
            sizeW={10}
          />
        </div>
        <section className="cards">
          <div>
            <Cards />
          </div>
        </section>
      </Knowledge>
    </Container>
  )
}
