import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger

    setColaboradores([...colaboradores, colaborador])
  }
  const times = [
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "Analista",
      cor: "#F0F8E2",
    },
    { 
      id: uuidv4(), 
      nome: "Data Science", 
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      corSecundaria: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#D9F7E9",
    },
    
    {
      id: uuidv4(),
      nome: "Celular",
      cor: "#FAE5F5",
    },
    
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFF5D9",
    },
  ]
  
  function deletarColaborador (){
    console.log("Deletando colaborador")}
  return (
    <div className="App">
      <Banner/>
      <Formulario times= {times.map(time => time.nome) } aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      <section className='times'> 
      <h1>Minha Organização</h1>
        {times.map((time, indice) => 
          <Time
            key= {indice}
            nome= {time}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)
        }
      </section>
      <Rodape />
      
    </div>
  );
}

export default App;
