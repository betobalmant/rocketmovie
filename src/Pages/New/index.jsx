import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Container, Form } from './styles'

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <ButtonText title='Voltar' icon={FiArrowLeft} isActive />
            <h1>Novo filme</h1>
          </header>
          <div className='inputs'>
            <Input placeholder='Título'/>
            <Input placeholder='Sua nota (de 0 a 5)'/>
          </div>
          <Textarea placeholder='Observações'/>
          
          <Section title='Marcadores'>
            <div className='tags'>
              <NoteItem value='Drama'/>
              <NoteItem isNew value='Novo marcador'/>
            </div>
          </Section>
          <div className='buttons'>
            <Button title='Excluir filmes'/>
            <Button title='Salvar alterações'/>
          </div>
        </Form>
      </main>
    </Container>
  )
}