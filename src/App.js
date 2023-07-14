import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario/Index';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';




function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger

    setColaboradores([...colaboradores, colaborador])
  }
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Analista",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Data Science", 
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Devops",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    
    {
      nome: "Celular",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
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
            nome= {time.nome}
            corPrimaria= {time.corPrimaria}
            corSecundaria= {time.corSecundaria}
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
