import React from 'react'
import { useState } from 'react'
import jajanken from "./styles/jajanken.css"

function Juego() {

    let opc = ['piedra', 'papel', 'tijera'];
    // 1 creamos variables, una de usuario y otra de maquina 
    const [human, setHuman] =useState ('')
    const [robot, setRobot] =useState ('');

    let juegoMaquina =() => {
        let randomOpcMaquina = Math.round ( Math.random()*(opc.length-1) );
        setRobot(opc[randomOpcMaquina] )
    }
    let juegoHuman = (e) =>{
        setHuman(e.target.innerText)
        juegoMaquina();
    }
  return (
    <div className='pantalla'>
        <div>
            <h3>Human</h3>
            <h3 style={{color: 'green'}}>{human}</h3>
        </div>
        <div>
            <h3>Robot</h3>
            <p style={{color: 'red'}}>{robot}</p>
        </div>
        <div>
            <button onClick={juegoHuman}>Piedra</button>
            <button onClick={juegoHuman}>Papel</button>
            <button onClick={juegoHuman}>Tijera</button>
        </div>
    </div>
  )
}

export default Juego