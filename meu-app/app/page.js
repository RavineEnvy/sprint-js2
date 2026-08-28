'use client'


import Header from "./components/header";
import SectionHero from "./components/sectionHero";
import SectionHeading from "./components/sectionHeading";
import Footer from "./components/footer"
import NumeroAleatorio from "./components/numeroAleatorio";
import LogicaComJS from "./components/tituloLogica"


export default function Home() {

  const dadosSimulador = {
    titulo: "Simulador Instantâneo de Processamento",
    precoPorMinuto: 2.50
  };
  return (
    <>
    <Header/>

    <main>
        <SectionHero/>
        <SectionHeading/>
        <LogicaComJS/>
        <NumeroAleatorio titulo="Sorteador de Números" minPadrao={1} maxPadrao={100} />
    </main>
    <Footer/>
    </>
  );
}