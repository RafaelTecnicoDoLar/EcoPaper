import Header from './Header'
import Footer from './Footer'
import "../Styles/Produtos.css"
import Card from "./Card.jsx"

import PaperKraft from "../assets/Produto/PaperKraft.png"
import CaixaPapelao from "../assets/Produto/CaixaPapelao.png"
import Sulfite from "../assets/Produto/Sufite.png"
import Etiqueta from "../assets/Produto/Etiqueta.png"

export default function Home() {
    return (
        <div>
            <Header />
            <div className='Produtos' id='PapelReciclado'>
                <h1 className='Titulo'>
                    Conheça nossos Produtos
                </h1>

                <div className='Carrossel'>
                    <Card Imagem={PaperKraft} Titulo={"Papel Kraft Sustentável"} SubTitulo={"Ideal para embalagens ecológicas e resistentes."} />
                    <Card Imagem={CaixaPapelao} Titulo={"Caixas Personalizadas"} SubTitulo={"Embalagens feitas sob medida para atender às necessidades do seu negócio."} />
                    <Card Imagem={Sulfite} Titulo={"Papéis para Escritório"} SubTitulo={"Papéis reciclados de alta qualidade para impressão e uso diário."} />
                    <Card Imagem={Etiqueta} Titulo={"Etiquetas Ecológicas"} SubTitulo={"Perfeitos para branding e rotulagem sustentável."} />
                </div>

            </div>

            <Footer />
        </div>
    )
}

