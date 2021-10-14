import React from 'react';
import './style.css'

function Input1(props){
    return(
        <div>
            <div className = 'textoCima'>
                <label>*Altura:</label>
                <label><span>{Number(props.valor / 100).toFixed(2)}</span>M</label>
            </div>

            <input 
                type="range"
                min = '0'
                max = '250'
                step = 'any'
                name="Altura" 
                placeholder = 'Digite sua altura'
                value = {props.valor}
                onChange = {e => {props.setValor((e.target.value))}}
            />

            <div className = 'textoBaixo'>
                <label>0 cm</label>
                <label>2.50 m</label>
            </div>
        </div>
    )
}

export default Input1