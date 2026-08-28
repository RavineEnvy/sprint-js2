'use client' 
 
 
 export default function SectionHero(){
    return(
        <>
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
                        Conheça nosso projeto
                    </a>
            </div>
    
            <div className="heroImage">
                    <img className="imgFimaai" src="/logoFilmaAi.png" alt="filmaai"/>
                </div>
                
            </section>
            
            <section className="about" id="sobre">
    
                <div>
                    <span className="eyebrow">SOBRE A EQUIPE</span>
                    <h2>Feito pelo grupo FILMA<span>.AI</span></h2>
                </div>
    
                <p>
                    Projeto desenvolvido para agilizar/facilitar processos de transcrição e geração de PDFs para estudantes Full-Time através da câmera do celular.
                </p>
    
            </section>
        </>
    );
 }
