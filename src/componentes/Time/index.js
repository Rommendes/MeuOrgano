import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props, mudarCor)=> {
    
    function aoDeletar() {
        console.log("deletar")
        
    }
    return (
        (props.colaboradores.length >0 )? 
        <section 
            className='time' style={{backgroundColor: props.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, 0.3)}}>

            <input onChange={evento => mudarCor(evento.target.value, props.nome)} value={props.cor} type='color' className='imput-cor'/> 

            <h3 style={{borderColor: props.cor}}>  {props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map(colaborador=> {
                
                console.log("Renderizando ", <Colaborador 
                        corDeFundo= {props.corPrimaria}
                        key= {colaborador.nome}
                        nome= {colaborador.nome}
                        cargo= {colaborador.cargo}
                        imagem = {colaborador.imagem} 
                        aoDeletar= {aoDeletar}
                    />)

                    return<Colaborador 
                        corDeFundo= {props.corPrimaria}
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