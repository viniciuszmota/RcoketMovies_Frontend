import { Container, Form } from './styles';

import { ButtonText } from '../../components/ButtonText';
import { MovieItem } from '../../components/MovieItem';
import { Scroll } from '../../components/Scroll';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom'

export function New() {
  return(
		<Container>
		<Header />        

			<Scroll>
				<main>
					<Form>
						<header>
							<Link to="/"><ButtonText title="Voltar" /></Link>
							<h1>Novo filme</h1>
						</header>

						<div className="box-input">
              
							<Input placeholder="Título"/>

              <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

					<TextArea placeholder="Observações" />

					<Section title="Marcadores">
              <div className="markers">
								<MovieItem value="Drama" />
               
								<MovieItem $isNew placeholder="Novo marcador"/>
              </div>
            </Section>

						<div className="box-button">
              <Button $trash title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
				</Form>
			
			</main>
		</Scroll>
	</Container>
)
}
