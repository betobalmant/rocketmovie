import { Container, Profile } from "./styles";
import { Input } from '../../components/Input'

export function Header() {
  return(
    <Container>
      <h1>
        RocketMovies
      </h1>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile to='/profile'>
        <div>
          <strong>Beto Balmant</strong>
          <span>sair</span>
        </div>

        <img 
          src="https://github.com/betobalmant.png"
          alt="Foto do usuário"
        />
      </Profile>  
    </Container>
  )
}