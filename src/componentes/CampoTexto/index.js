

import './CampoTexto.css'

export const CampoTexto = (props) =>{
   
    /*console.log(props.label)*/
    
     const placeholderModificada =`${props.placeholder}...`


     const aoDigitado = (evento) => {
        /*console.log(evento.target.value)*/
        props.aoAlterado(evento.target.value)
     }
    return (

        <div className='campo-texto'>
            <label> 
                {props.label}
            </label>

            <input value={props.valor} onChange={aoDigitado} required= {props.obrigatorio} placeholder= {placeholderModificada} />
        </div>
    )
    
}
export default CampoTexto