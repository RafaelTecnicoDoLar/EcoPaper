import '../Styles/Header.css'
import Logo from '../assets/Logo/Logo.png'

import email from '../assets/Botao/email.png'
import idioma from '../assets/Botao/idioma.png'
import lupa from '../assets/Botao/lupa.png'

export default function Header() {
    return (
        <header>
            <a href="/"> <img className='Logo' src={Logo} /> </a>

            <div className='BoxLink'>
                <a className="LinkinPark" href="/"> Home </a>
                <a className="LinkinPark" href="/sobre"> Sobre nós </a>
                <a className="LinkinPark" href="/blog"> Blog </a>
                <a className="LinkinPark" href="/contato"> Contatos </a>
                <a className="LinkinPark" href="/Ri"> Relação com investidores </a>

            </div>

            <div className='BoxLink'>
                <a href="mailto:rjonasmombellifranco@gmail.com?subject=Olá&body=Escreva sua mensagem aqui" target="_blank" > <img className="botao" src={email} /> </a>
                <a href="/"> <img className="botao" src={idioma} /> </a>

            </div>

        </header>
    )
}