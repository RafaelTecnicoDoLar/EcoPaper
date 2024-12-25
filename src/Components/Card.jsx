import "../Styles/Card.css"

export default function Card({ Imagem, Titulo, SubTitulo, Contato }) {
    return (
        <div className="Card">
            <img className="img" src={Imagem} />

            <p className="Titulo"> {Titulo} </p>

            <p className="Subtitulo"> {SubTitulo} </p>

            <a className="Botao botaoAnimacao" href={"/contato"}> Entre em contato </a>

        </div>
    )
}