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

  const inicial = [{ id: uuidv4(), nome: "", cargo: "", imagem: "", time: "" }];

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
    
    //console.log("Deletando colaborador: ");
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

  return (
    <div className="App">
      <Banner />

      <Formulario
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
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
