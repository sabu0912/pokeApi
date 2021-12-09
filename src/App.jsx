import React, { useEffect, useState } from 'react'

const App = () => {
    const [contador, cambiarContador] = useState(0)
    const [bloqueo, cambiarBloqueo] = useState(true)
    const [bloqueo5, setBloqueo5] = useState(true)
    const [contador2, cambiarContador2] = useState(true)
    
    const aumentar = () => {
        cambiarBloqueo(false)
        cambiarContador(contador + 1)
        if(contador === 4) {
            setBloqueo5(false)
        }
    }

    const disminuir = () => {
        if(contador === 5) {
            setBloqueo5(true)
        }
        if(contador === 1) {
            cambiarBloqueo(true)        
        }
        cambiarContador(contador - 1)
    }

    const reset = () => {
        cambiarBloqueo(true)
        cambiarContador(0)
        setBloqueo5(true)
    }

    const aumentar5 = () => {
        cambiarBloqueo(false)
        cambiarContador(contador + 5)
        setBloqueo5(false)
    }

    const restar5 = () => {
        if(contador <= 9) {
            setBloqueo5(true)
        }
        if(contador === 5) {
            cambiarBloqueo(true)
        }
        cambiarContador(contador - 5)
    }

    useEffect(() => {
       console.log('useEffect'); // es una funcion que dentro de ella se va a realizar despues que se realice su componente
    }, [contador2])

    console.log('renderizando...');

    const contadorDos = () => {
        cambiarContador2(!contador2)
    }
    
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={aumentar}>+</button>
            <button onClick={disminuir} disabled={bloqueo}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={aumentar5}>+5</button>
            <button onClick={restar5} disabled={bloqueo5}>-5</button>
            <button onClick={contadorDos}>cambiar contador 2</button>
        </div>
    )
}

export default App
