import { Container, Profile, Logout } from './styles';

import { Input } from '../Input'

import { Link } from 'react-router-dom';


export function Header() {
  return (
    <Container>
      <div className="header">
        <h1>RocketMovies</h1>
        
          <Input placeholder ="Pesquisar pelo título">
          </Input>
        
        <div className="profile">
          <div className="name-logout">    
            <strong>Vinicius Zamprogno</strong>
            <Logout>sair</Logout>
          </div>

          <Link to="/profile">
            <Profile>
              <img src= "https://github.com/viniciuszmota.png" alt="Foto do usuário" />
            </Profile>
          </Link>
        </div>
      </div>
    </Container>
  )
}