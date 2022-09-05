import logo from '../../assets/img/logo.svg'
import './styles.css'


function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>DSMeta</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/devsuperior.ig"> @devsuperior.ig</a><br />
              Aluno: <a className='aluno' href="https://www.linkedin.com/in/dev-gabrielveras/">@GabrielVeras</a>

            </p>
        </div>
    </header>
    )
}

export default Header