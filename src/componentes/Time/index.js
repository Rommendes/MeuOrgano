import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props, aoDeletar)=> {
    return (

        (props.colaboradores.length >0 )? <section className='time' style={{backgroundColor: props.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)'}}>

            <h3 style={{borderColor: props.corPrimaria}}>  {props.nome}</h3>
            
            <div className='colaboradores' >
                {props.colaboradores.map((colaborador, indice) => {
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
                    key= {indice}
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