import React from 'react'
import './style.css'

function inputPeso(props){
    return (
        <div>
            <div className = 'textoCima'>
                <label>*Peso:</label>
                <label><span>{Number(props.valor).toFixed(2)}</span>kg</label>
            </div>

            <input 
                type="range"
                min = '0'
                max = '200'
                step = 'any'
                name="Peso" 
                placeholder = 'Digite sua altura'
                value = {props.valor}
                onChange = {e => {props.setValor((e.target.value))}}
            />

            <div className = 'textoBaixo'>
                <label>0 kg</label>
                <label>200 kg</label>
            </div>
        </div>
    )
}

export default inputPeso