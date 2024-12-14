import Header from './Header'
import Footer from './Footer'
import '../Styles/Contato.css'


import { useState } from 'react'

export default function Contato() {
    const [nome, useNome] = useState();
    const [sobrenome, useSobrenome] = useState();
    const [email, useEmail] = useState();
    const [mensagem, useMensagem] = useState();

    function Enviar() {
        alert("Voce quer enviar as informações?")
    }

    function Ligar() {
        alert("ligando")
    }

    return (
        <div>
            <Header />

            <div className='Formulario'>
            <p>
                Formulário de Contato:
            </p>

            <input ClassName="Input" type="text" name="Nome" placeholder='Nome' value={nome} onChange={(e) => useNome(e.target.value)} />
            <input ClassName="Input" type="text" name="Sobrenome" placeholder='Sobrenome' value={sobrenome} onChange={(e) => useSobrenome(e.target.value)} />
            <input ClassName="Input" type="text" name="Email" placeholder='Email' value={email} onChange={(e) => useEmail(e.target.value)} />
            <input ClassName="Mensagem" type="text" name="Mensagem" placeholder='Mensagem' value={mensagem} onChange={(e) => useMensagem(e.target.value)} />

            <div>
                <button className='Botao botaoAnimacao' onClick={Enviar}> Enviar </button>
                <button className='Botao botaoAnimacao' onClick={Ligar}> Ligar </button>

            </div>
            </div>
            

            <div>
                <p>
                    Nossos contatos
                </p>

                <pre>
                    Informações de Contato:
                    Email: contato@ecopaper.com
                    Telefone: (11) 9999-9999
                    Endereço: Avenida Sustentável, 123, São Paulo, SP.

                </pre>
            </div>


            <Footer />

        </div>
    )
}