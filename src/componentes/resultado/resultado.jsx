import React from 'react'
import './style.css'

import Magro from '../../imgs/magro.png'
import Normal from '../../imgs/normal.png'
import Gordo from '../../imgs/gordo.png'
import Gordo1 from '../../imgs/gordo1.png'
import Gordo3 from '../../imgs/gordo3.png'
import Gordo2 from '../../imgs/gordo2.png'

function Resultado(props){
    
    let altura = props.altura/100
    let imc = (props.peso / (altura * altura))

    const resultado = () => {
        let result = ''
        let resultImg

        if (imc < 18.5){
            result = <h2>ABAIXO DO PESO</h2>
            resultImg = <img src = {Magro} alt = 'Imagem Magro'/>
        }else if (imc >= 18.5 && imc < 25){
            result = <h2>PESO NORMAL</h2>
            resultImg = <img src = {Normal} alt = 'Imagem Normal'/>
        }else if (imc >= 25 && imc < 30){
            result =  <h2>SOBREPESO</h2>
            resultImg = <img src = {Gordo} alt = 'Imagem Gordo'/>
        }else if (imc >= 30 && imc <= 34.9){
            result = <h2>OBESIDADE GRAU 1</h2>
            resultImg = <img src = {Gordo1} alt = 'Imagem Gordo'/>

        }else if(imc >= 34.9 && imc < 39.9 ){
            result = <h2>OBESIDADE GRAU 2</h2>
            resultImg = <img src = {Gordo2} className = 'gordo3' alt = 'Imagem Gordo'/>
            
        }else if (imc >= 40) {
            result =  <h2>OBESIDADE MÓRBIDA</h2>
            resultImg = <img src = {Gordo3} alt = 'Imagem Gordo'/>
        }else{
            result = <h2>Aguardando..</h2>
            imc = 0
        }

        return (
            <div className = 'resultados'>
                {result}
                <hr />

                <div>
                    {resultImg}
                </div>
    
                <p>Seu Índice de massa corporal é:</p>
                <span className = 'imc'>{imc.toFixed(2)}</span>
            </div>
        )

    }

    return (
        <div>
            {
                resultado()
            }
        </div>
    )
}

export default Resultado