'use client'

export default function Projects(){
    return(
          <div className="projects">

                <article className="card">
                    <span className="cardNumber">01</span>
                    <h3>Landing Page</h3>
                    <p>
                        Página promocional criada com foco em hierarquia
                        visual, tipografia e conversão.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

                <article className="card">
                    <span className="cardNumber">02</span>
                    <h3>App Interface</h3>
                    <p>
                        Interface responsiva com componentes simples e
                        uma experiência de navegação consistente.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

                <article className="card">
                    <span className="cardNumber">03</span>
                    <h3>Website Institucional</h3>
                    <p>
                        Website com estrutura clara para apresentar
                        produtos, serviços e informações da empresa.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

                <article className="card extra-card">
                    <span className="cardNumber">04</span>
                    <h3>Dashboard</h3>
                    <p>
                        Painel com informações organizadas para facilitar
                        a leitura e acompanhamento de dados.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

                <article className="card extra-card">
                    <span className="cardNumber">05</span>
                    <h3>E-commerce</h3>
                    <p>
                        Experiência de compra com destaque para produtos,
                        categorias e chamadas para ação.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

                <article className="card extra-card">
                    <span className="cardNumber">06</span>
                    <h3>Portfolio</h3>
                    <p>
                        Página pessoal para apresentação de projetos,
                        habilidades e experiências profissionais.
                    </p>
                    <a href="#">Ver projeto →</a>
                </article>

            </div>
    );
}