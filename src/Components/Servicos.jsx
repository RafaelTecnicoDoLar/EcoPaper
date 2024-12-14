import Header from './Header'
import Footer from './Footer'

import CardService from './CardService'

import Empresa from '../assets/Fotos/Empresarial.jpg'
import Producao from '../assets/Fotos/Producao.jpg'
import Entrega from '../assets/Fotos/Entrega.jpg'

export default function Servicos() {
    return (
        <div>
            <Header />
            <div className='Produtos'>
                <p className='Titulo'>
                    Nossos serviços

                </p>

                <div className='Carrossel'>
                    <CardService Imagem={Empresa} Titulo={"Consultoria em Embalagens Sustentáveis"} SubTitulo={"Ajudamos empresas a migrar para soluções ecológicas"} />
                    <CardService Imagem={Producao} Titulo={"Produção Sob Demanda"} SubTitulo={"Personalizamos produtos para atender a pedidos específicos"} />
                    <CardService Imagem={Entrega} Titulo={"Entrega Rápida e Segura"} SubTitulo={"Garantimos a entrega no prazo, com embalagens seguras"} />

                </div>
                
            </div>
            <Footer />

        </div>
    )
}