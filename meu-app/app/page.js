'use client'

import Relogio from "./components/relogio";
import Nome from "./components/nome"
import Headering from "./components/header";
import SectionHero from "./components/sectionHero";
import SectionHeading from "./components/sectionHeading";
import Projects from "./components/projects";


export default function Home() {
  return (
    <>
    <Headering/>

    <main>

        <SectionHero/>

        <section className="section" id="projetos">

            <SectionHeading/>
            <Projects/>
        </section>
    </main>
    </>
  );
}