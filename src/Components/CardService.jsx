import "../Styles/CardService.css"

export default function Card({ Imagem, Titulo, SubTitulo}) {
    return (
        <div className="Card">
            <img className="img" src={Imagem} />

            <h1 className="Titulo"> {Titulo} </h1>

            <p className="Subtitulo"> {SubTitulo} </p>

            <a className="Botao botaoAnimacao" href={"/contato"} target="_blanck"> Entre em contato</a>

        </div>
    )
}