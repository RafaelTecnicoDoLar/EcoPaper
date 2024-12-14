import '../Styles/Footer.css'

import Logo from '../assets/Logo/Logo.png'
import Vite from "../assets/Logo/vite.svg"
import React from "../assets/Logo/react.svg"
import ReactRouter from "../assets/Logo/ReactRouter.png"

export default function Footer() {
    return (
        <footer >
            <div className="Container">
                <a href="/"> <img className='Logo botaoAnimacao' src={Logo} /> </a>

                <p>
                    © 2024 EcoPaper. Todos os direitos reservados.
                </p>

            </div>

            <div className='BoxLink'>
                <a className="LinkinPark botaoAnimacao" href="/"> Home </a>
                <a className="LinkinPark botaoAnimacao" href="/produtos"> Produtos </a>
                <a className="LinkinPark botaoAnimacao" href="/servicos"> Serviços </a>
                <a className="LinkinPark botaoAnimacao" href="/sobre"> Sobre nós </a>
                <a className="LinkinPark botaoAnimacao" href="/blog"> Blog </a>
                <a className="LinkinPark botaoAnimacao" href="/contato"> Contatos </a>
                <a className="LinkinPark botaoAnimacao" href="/Ri"> RI </a>

            </div>

            <div>
                <p className="Realizacao">
                    Projeto feito usando o
                </p>

                <div className="Logos">
                    <a href="https://vite.dev/" target="_blank"> <img className='imgfooter botaoAnimacao' src={Vite} /> </a>
                    <a href="https://react.dev/" target="_blank"> <img className='imgfooter botaoAnimacao' src={React} /> </a>
                    <a href="https://reactrouter.com/" target="_blank"> <img className='imgfooter botaoAnimacao' src={ReactRouter} /> </a>

                </div>

            </div>

        </footer>
    )
}