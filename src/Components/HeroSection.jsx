import '../Styles/HeroSection.css'

export default function HeroSection() {
    return (
        <div>
            <div className="Hero" id="ArvoreFundo">
                <h1 className='Texto'>
                    Descubra soluções inovadoras em papel e embalagens recicláveis.

                </h1>

                <a className='Botao botaoAnimacao' href="produtos" >Conheça nossas soluções sustentáveis</a>

            </div>

            <div className="Hero" id="PlantaOperacional">
                <h1 className='Texto'>
                Além de produtos sustentáveis, oferecemos soluções completas para nossos clientes.

                </h1>

                <a className='Botao botaoAnimacao' href="servicos" >Nossos Serviços</a>

            </div>
        </div>


    )
}