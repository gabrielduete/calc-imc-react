import React, { useState } from 'react'
import './App.css'

import InputAltura from './componentes/inputs/inputAltura'
import InputPeso from './componentes/inputs/inputPeso'
import Resultado from './componentes/resultado/resultado'

function App(){

  const [inputAltura, setInputAltura] = useState(0)
  const [inputPeso, setInputPeso] = useState(0)

  return (
    <section className = 'container'>

      <div className = 'ladoEsquerdo'>
        <Resultado peso = {inputPeso} altura = {inputAltura} />
      </div>

      <div className = 'ladoDireito'>
        <div className = 'inputs'>
          <InputPeso valor = {inputPeso} setValor = {setInputPeso}/>
          <InputAltura valor = {inputAltura} setValor = {setInputAltura}/>
        </div>
      </div>

    </section>
  )
}

export default App