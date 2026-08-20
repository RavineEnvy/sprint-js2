'use client'

import { useState, useEffect } from 'react'

export default function Relogio() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setHora(new Date(), 1000));
        return () => clearInterval(id);
    }, [])

    return <p>{hora.toLocaleTimeString()}</p>
}