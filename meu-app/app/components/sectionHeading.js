'use client'

export default function SectionHeading(){
    return(
        <>
        <section className="section" id="projetos">

            <div className="sectionHeading">
                <span className="eyebrow">NOSSO TRABALHO</span>
                <h2>Projeto FILMA<span>.AI</span></h2>
                <p>
                    Alguns exemplos de interfaces e gerenciador de arquivos que fazem parte do projeto.
                </p>
            </div>

            <div className="gridContainer">

                <article className="card">
                    <span className="cardNumber">01</span>
                    <h3>Câmera</h3>
                    <p>
                        Uma interface minimalista, porém que possuí diversas funcionalidades.
                    </p>
                    <div className="cardDetails">
                        <img className="imgCard" src="/menu.png" alt="menu"/>
                    </div>
                </article>

                <article className="card">
                    <span className="cardNumber">02</span>
                    <h3>Modo Documento</h3>
                    <p>
                        Área onde é possível escolher escanear documentos ou transcrever imagens.
                    </p>
                    <div className="cardDetails">
                        <img className="imgCard" src="/documento.png" alt="doc"/>
                    </div>
                </article>

                <article className="card">
                    <span className="cardNumber">03</span>
                    <h3>Gerenciamento de Texto</h3>
                    <p>
                        Área onde é possível gerenciar e editar texto transcritos.
                    </p>
                    <div className="cardDetails">
                        <img className="imgCard" src="/gerenciamento.png" alt="gerenciamento"/>
                    </div>
                </article>

                <article className="card">
                    <span className="cardNumber">04</span>
                    <h3>Menu de Arquivos</h3>
                    <p>
                        Painel organizado para facilitar o gerenciamento de arquivos e dados.
                    </p>
                    <div className="cardDetails">
                        <img className="imgCard" src="/arquivos.png" alt="arquivos"/>
                    </div>
                </article>

                <article className="card">
                    <span className="cardNumber">05</span>
                    <h3>Funcionalidades Extras</h3>
                    <p>
                        Configurações de câmera que se adequam ao seu perfil.
                    </p>
                    <div className="cardDetails">
                        <img className="imgCard" src="/mais.png" alt="mais"/>
                    </div>
                </article>

                <article className="card">
                    <span className="cardNumber">06</span>
                    <h3>Equipe FILMA<span>.AI</span></h3>
                    <p>
                        Equipe por trás do desenvolvimento do projeto para a JOVI.
                    </p>
                    <div className="cardDetails">
                        <p>Arthur Henrique - 569499</p>
                        <p>Enzo Dias - 569866</p>
                        <p>Guilherme Freire - 570669</p>
                        <p>João Gabriel - 573891</p>
                    </div>
                </article>

            </div>

        </section>
        </>
    );
}