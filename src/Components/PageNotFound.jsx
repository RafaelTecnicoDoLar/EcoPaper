import Header from './Header'
import Footer from './Footer'
import '../Styles/PageNotFound.css'
import PessoaConfusa from '../assets/404NotFound.png'

export default function PageNotFound() {
    return (
        <div >
            <Header />
            <div className='Page'>
                <img className="PessoaConfusa" src={PessoaConfusa} />

                <p className='Titulo'>
                    Poxa... que pena... página não encontrada
                </p>

                <p className='subTitulo'>
                    Visite nossa home e encontre tudo o que você precisa!
                </p>

                <a className="Botao botaoAnimacao" href="/" > Página inicial</a>

            </div>

            <Footer />

        </div>

    )
}