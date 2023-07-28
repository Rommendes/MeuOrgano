import { useEffect } from "react";

import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  obrigatorio = false,
  valor,
  aoAlterado,
  itens,
}) => {
  /* useEffect(() => {
    console.log(itens);
  }, [itens]);*/
  return (
    <div className="listaSuspensa">
      <label> {label} </label>

      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        {itens?.map((item) => (
          <option key={item.id}>{item.nome}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
