import { ListDashes, X } from 'phosphor-react'
import { useState } from 'react'
import Modal from 'react-modal'
import { Button } from '../Button'
import { Github } from '../Github'
import { Linkedin } from '../Linkedin'
import { Container } from './styled'
import './styled.css'

export function Modals() {
  const [modalOpen, setModalOpen] = useState(false)
  function closeModal() {
    setModalOpen(false)
  }
  return (
    <Container>
      <button className="open" onClick={() => setModalOpen(true)}>
        <ListDashes size={32} color={'#FFFFF0'} />
      </button>
      <div>
        <Modal
          className="ReactModal__Content ReactModal__Content--after-open"
          isOpen={modalOpen}
          onRequestClose={closeModal}
        >
          <section>
            <div className="close">
              <button onClick={() => setModalOpen(false)}>
                <X size={22} color={'#FFFFF0'} />
              </button>
            </div>
            <div className="icons">
              <Github link={'https://github.com/Joanderson337'} size={34} />
              <Linkedin
                link={'https://www.linkedin.com/in/joandersonsilva337/'}
                size={34}
              />
              <Button titleBtn={'Home'} size={80} link={''} />
            </div>
          </section>
        </Modal>
      </div>
    </Container>
  )
}
