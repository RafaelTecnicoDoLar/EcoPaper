import "../Styles/CardService.css"

export default function Card({ Imagem, Titulo, SubTitulo}) {
    return (
        <div className="Cardservice">
            <img className="imgservice" src={Imagem} />

            <h1 className="Tituloservice"> {Titulo} </h1>

            <p className="Subtituloservice"> {SubTitulo} </p>

            <a className="Botao botaoAnimacao" href={"/contato"}> Entre em contato</a>

        </div>
    )
}