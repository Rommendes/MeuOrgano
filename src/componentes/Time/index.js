import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props, time, mudarCor)=> {
    
    function aoDeletar() {
        console.log("deletar")
        
    }
    return (
        (props.colaboradores.length >0 )? 
        <section 
            className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, 0.3)}}>

            <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.cor} type='color' className='imput-cor'/> 

            <h3 style={{borderColor: time.cor}}>  {time.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador=> {
                
                console.log("Renderizando ", <Colaborador 
                        corDeFundo= {time.cor}
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        aoDeletar= {aoDeletar}
                    />)

                    return<Colaborador 
                        corDeFundo= {time.cor}
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        aoDeletar= {aoDeletar}
                    />
                })}
            </div>
            
        </section>
        : ''
                    //QDO NÃO TEM NENHUM COLABORADOR O TIME NÃO APARECE
                    //(props.colaboradores.length >0 )?
                    // ; '' string vazia
    )

}
export default Time