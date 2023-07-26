import './ListaSuspensa.css'

const ListaSuspensa = ({label, itens, valor, time, aoAlterado, obrigatorio=false}) => {
    
    return(
        <div className='listaSuspensa'>
            <label> {label} </label>
            
             <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}> 
             {itens.map((item)=> (
                <option key={item} > 
                    {item} 
                 </option>
            ))}
            
            
            </select>

        </div>)
    
}
export default ListaSuspensa