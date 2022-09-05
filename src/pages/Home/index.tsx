import { Atom, FileCss, FileHtml, FileJs, GitBranch } from 'phosphor-react'
import { Frame } from '../../assets/Frame'
import { PhotoPerfil } from '../../assets/PhotoPerfil'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Description } from '../../components/Descripton'
import { Header } from '../../components/Header'
import { TagTitle } from '../../components/TagTitle'
import { Text } from '../../components/Text'
import { Container, HeaderC, Wrapper, About, Knowledge } from './style'

export function Home() {
  return (
    <Container>
      <HeaderC>
        <Header />
      </HeaderC>
      <Wrapper>
        <section>
          <Text
            titleText={'Olá mundo! 👋 Meu nome é '}
            size={18}
            cl={'WHILE_100'}
            weight={400}
          />
          <Text
            titleText={'Joanderson'}
            size={72}
            cl={'WHILE_100'}
            weight={900}
          />
          <div>
            <Text
              titleText={'DESENVOLVEDOR'}
              size={18}
              cl={'GREEN_200'}
              weight={900}
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
          />
        </div>
        <section className="cards">
          <div>
            <Card
              icon={<FileHtml size={32} color={'#ffff'} />}
              bg={'BG_CARD_HTML'}
              bd={'BD_CARD_HTML'}
              title={'HTML'}
              descripton={
                'HTMl é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.'
              }
            />
            <Card
              icon={<FileCss size={32} color={'#ffff'} />}
              bg={'BG_CARD_CSS'}
              bd={'BD_CARD_CSS'}
              title={'CSS'}
              descripton={
                'O CSS é uma linguagem de folhas de estilos que é utilizada para definir como os documentos escritos na linguagem de marcação HTML.'
              }
            />
            <Card
              icon={<FileJs size={32} color={'#ffff'} />}
              bg={'BG_CARD_JS'}
              bd={'BD_CARD_JS'}
              title={'Javascript'}
              descripton={
                'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.'
              }
            />
            <Card
              icon={<Atom size={32} color={'#ffff'} />}
              bg={'BG_CARD_RE'}
              bd={'BD_CARD_RE'}
              title={'React.js'}
              descripton={
                'React. js é, portanto, uma biblioteca de JavaScript, open source, utilizada para construir user interfaces, nomeadas para aplicações de página única.'
              }
            />
            <Card
              icon={<GitBranch size={32} color={'#ffff'} />}
              bg={'BG_CARD_GIT'}
              bd={'BD_CARD_GIT'}
              title={'Git'}
              descripton={
                'O GIT é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.'
              }
            />
          </div>
        </section>
      </Knowledge>
    </Container>
  )
}
