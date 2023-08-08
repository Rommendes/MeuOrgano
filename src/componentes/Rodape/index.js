import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="imagem">
        <ul>
          <li >
            <a href="faceboock.com" target="_blank">
              <img src="/imagens/fb.png" alt="" />
            </a>
          </li>
          <li >
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="" />
            </a>
          </li>
          <li >
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>

      <section className="logo">
        <img src="imagens/logo.png" alt="" />
        
      </section>

      <section className="texto"> 
        <p>Desenvolvido por alura</p>
      </section>
    </footer>
  );
};
export default Rodape;
