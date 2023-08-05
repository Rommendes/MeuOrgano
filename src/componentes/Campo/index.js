import "./Campo.css";

export const Campo = (props) => {
  /*console.log(props.label)*/

  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    /*console.log(evento.target.value)*/
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className={`campo campo-${props.type} `}>
      <label>{props.label}</label>

      <input
        type={props.type}
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
export default Campo;
