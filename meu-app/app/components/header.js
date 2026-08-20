'use client'

export default function Headering() {
  return (
   <header className="header">
        <a className="logo" href="#">
            FILMA<span>.AI</span>
        </a>

        <nav className="menu">
            <a className="tema" href="#tema"><img src="tema.png" alt="tema"/></a>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Equipe</a>
        </nav>
    </header>
  );
}