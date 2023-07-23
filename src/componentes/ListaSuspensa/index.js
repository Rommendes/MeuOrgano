import './ListaSuspensa.css'

const ListaSuspensa = ({label, items, valor, aoAlterado, obrigatorio= false}) => {
    
    return(
        <div className='listaSuspensa'>
            <label> {label} </label>

            <select required={obrigatorio} value={valor} onChange={evento=> aoAlterado(evento.target.value)}> 
           
            {items.map((key, item) =>  <option key={key}>{item}</option>
              )}

            
            
            
            </select>

        </div>
    //
    )
}
export default ListaSuspensa