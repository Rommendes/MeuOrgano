import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, onClickDelete }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={onClickDelete} //AQUI
        //onClick={() => aoDeletar(colaborador.id)} antes era assim
      />

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt="imagem" />
      </div>

      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};
export default Colaborador;
