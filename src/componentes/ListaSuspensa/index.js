import Time from '../Time'
import './ListaSuspensa.css'

const ListaSuspensa= ({label, obrigatorio, valor, aoAlterado, itens}) => {
    return(
        <div className='listaSuspensa'>
            <label> {label} </label>

            <select required= {obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}> 
                {itens?.map((item)=> (
                    <option key={item} > 
                        {item} 
                    </option>
                ))}
                    
    </select>
       
           

        </div>) 

    }        
    

export default ListaSuspensa