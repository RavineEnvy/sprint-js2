'use client'

import { useState, useEffect } from 'react';

export default function GeradorAleatorio({ titulo, minPadrao = 1, maxPadrao = 100 }) {
  const [min, setMin] = useState(minPadrao);
  const [max, setMax] = useState(maxPadrao);
  const [numeroGerado, setNumeroGerado] = useState(null);
  const [historico, setHistorico] = useState([]);

  
  useEffect(() => {
    const dadosSalvos = localStorage.getItem('historico_sorteios');
    if (dadosSalvos) {
      setTimeout(() => {
        setHistorico(JSON.parse(dadosSalvos));
      }, 0);
    }
  }, []);

  const gerarNumero = () => {
    
    const minNum = Math.min(Number(min), Number(max));
    const maxNum = Math.max(Number(min), Number(max));

    
    const sorteado = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    const novoSorteio = {
      id: Math.floor(Math.random() * 100000), 
      valor: sorteado,
      intervalo: `${minNum} a ${maxNum}`,
      hora: new Date().toLocaleTimeString()
    };

    const novoHistorico = [novoSorteio, ...historico.slice(0, 3)];
    setNumeroGerado(sorteado);
    setHistorico(novoHistorico);

    
    localStorage.setItem('historico_sorteios', JSON.stringify(novoHistorico));
  };

  return (
    <section className="section">
      <div className="cardProcesso">
        <h3>{titulo}</h3>
        <p>Escolha um número aleatório para sortear.</p>

        <div className="calculadora">
          <label htmlFor="minInput">Mínimo:</label>
          <input
            id="minInput"
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />

          <label htmlFor="maxInput">Máximo:</label>
          <input
            id="maxInput"
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        <button className="button" onClick={gerarNumero}>
          Sortear Número
        </button>

        {numeroGerado !== null && (
          <div className="calcResultado">
            <p>Número Sorteado: <strong className="numeroDestaque">{numeroGerado}</strong></p>
          </div>
        )}

        {historico.length > 0 && (
          <div className="calcHistorico">
            <small><strong>Últimos números sorteados (localStorage):</strong></small>
            <ul>
              {historico.map((item) => (
                <li key={item.id}>
                  <strong>{item.valor}</strong> (Faixa: {item.intervalo} às {item.hora})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}