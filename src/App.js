import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario/Index";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

   const colaborador = [
     {
      id: uuidv4(),
      favorito: false,
      nome: "Ro Mendes",
      cargo: "",
      imagem: "",
      time: times[""],
     },
   ];

  const [colaboradores, setColaboradores] = useState(colaborador);

  console.log("COLABORADORES: ", colaboradores);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores(prevState => [...prevState, colaborador]);//AQUI
  };

  const deletarColaborador = (id) => {
    console.log("Deletou colaborador: ", id);

    const colaboradoresFiltrados = colaboradores?.filter(//AQUI
      (colaborador) => colaborador.id !== id 
    );

    console.log("Colaboradores filtrados: ", colaboradoresFiltrados); //AQUI
    setColaboradores(colaboradoresFiltrados);

  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }
  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4()}]);
  }

  function resolverFavorito(id){
    setColaboradores(
      colaboradores.filter((colaborador)=>{
        if(colaborador.id === id) colaborador.favorito= !colaborador.favorito;
        return colaborador;
      })
    )

  }
  return (
    <div className="App">
      <Banner />

      <Formulario
      cadastrarTime={cadastrarTime}
        times={times}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      <section className="times">
        <h1>Minha Organização</h1>

        {times.map((time, indice) => (
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            onClickDeleteColaborador=
            {(idDoColaborador)=>deletarColaborador(idDoColaborador)} //AQUI
            mudarCor={mudarCorDoTime}
            aoFavoritar= {resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
