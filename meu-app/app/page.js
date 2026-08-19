'use client'

import styles from "./css/index.css";


export default function Home() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#">
            FILMA<span>.AI</span>
        </a>

        <nav className="menu">
            <a className="tema" href="#tema"><img src="/public/tema.png" alt="tema"/></a>
            <a href="#inicio">Início</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
        </nav>
    </header>

    <main>

       <section className="hero" id="inicio">

            <div className="heroContent">
                <span className="eyebrow">FRONT-END DESIGN</span>

                <h1>
                    Facilitando experiências
                    <strong>universitárias.</strong>
                </h1>

                <p>
                    Transcrições, digitalização e converções para PDF, agilizando a sua vida.
                </p>

                <a className="button" href="#projetos">
                    Conheça nossos projetos
                </a>
            </div>

            <div className="heroImage">
                <img className="imgFimaai" src="/public/logoFilmaAi.png" alt="filmaai"/>
            </div>

        </section>

    </main>
    </>
  );
}