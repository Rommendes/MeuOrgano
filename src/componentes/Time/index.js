/*import { type } from '@testing-library/user-event/dist/type';*/
import Colaborador from '../Colaborador'
import './Time.css'
/*import hexToRgba from 'hex-to-rgba';*/

const Time = (props)=> {
    
    function aoDeletar() {
        console.log("deletar")
        
    }
   
    return (
        props.colaboradores.length > 0 && 
        <section 
            className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', background: props.corPrimaria}}>

            <input type= 'color' className='input-cor'/>

            <h3 style={{borderColor: props.corSecundaria}}>  {props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador=> { 
                    (console.log('Renderizando'))
                    return<Colaborador 
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        corDeFundo= {props.corSecundaria}
                        aoDeletar= {aoDeletar}
                />
                    })}
            </div>
            
        </section>
      
                    //QDO NÃO TEM NENHUM COLABORADOR O TIME NÃO APARECE
                    //(props.colaboradores.length >0 )?
                    // ; '' string vazia
    )

}
export default Time