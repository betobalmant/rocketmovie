import { Container, Content } from "./styles"
import { FiPlus } from "react-icons/fi";
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'
import star1Img from '../../assets/star.png'
import star2Img from '../../assets/star2.png'


export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <div className='mymovie'>
            <h1>Meus filmes</h1>
            <Button title='Adicionar filme' icon={FiPlus} />
          </div>

          <Note data={{
            title: 'Interestellar',
            img: star1Img,
            p: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está ...',
            tags: [
              { id: '1', name: 'Ficção Científica'},
              { id: '2', name: 'Drama'}
            ]
          }} 
          />
        </Content>
      </main>
    </Container>
    
  )
}