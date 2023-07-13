import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar})=> {
    return (
        <div  className='colaborador'>

        <button onClick={() => aoDeletar()}>Fechar</button>

            <div className='cabecalho' style={{background: corDeFundo}}>
                <img src= {imagem} alt= {nome} />
            </div>

            <div className='rodape'>
                <h4> {nome} </h4>
                <h5> {cargo} </h5>
            </div>

        </div>
    )
}
export default Colaborador