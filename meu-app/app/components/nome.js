'use client'

import {useState} from 'react'

export default function Nome(){
    const [nome, setNome] = useState('');

    return(
        <>
        <input value={nome} onChange={evento => setNome(evento.target.value)} placeholder='Seu Nome'/>
            <p>Olá, {nome || 'Visitante'}!</p>
        </>
    );
}