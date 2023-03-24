import { useEffect, useState } from "react"

import styles from './Calculadora.module.css'

const Calculadora = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [mensagem, setMensagem] = useState('')
    const [verMensagem, setVerMensagem] = useState(false)

    useEffect(() => {
        setVerMensagem(false)
        
        if(peso && altura && peso !== 0 && altura !== 0) {
            const imc = peso / (altura * altura)
    
            let mensagemEnviar = ''
            if (imc < 18.5) {
                mensagemEnviar = `Seu IMC é: ${imc.toFixed(2)} - Magreza`
            } else if (imc < 25) {
                mensagemEnviar = `Seu IMC é: ${imc.toFixed(2)} - Normal`
            } else if (imc < 30) {
                mensagemEnviar = `Seu IMC é: ${imc.toFixed(2)} - Sobrepeso`
            } else if (imc < 40) {
                mensagemEnviar = `Seu IMC é: ${imc.toFixed(2)} - Obesidade`
            } else if (imc >= 40) {
                mensagemEnviar = `Seu IMC é: ${imc.toFixed(2)} - Obesidade grave`
            }
    
            setVerMensagem(true)
            setMensagem(mensagemEnviar)
        }
    }, [peso, altura])


    return (
        <div className="container">
            <form className={styles.form}>
                <input className={styles.formInput} type="text" placeholder="Digite seu peso" onChange={e => setPeso(parseFloat(e.target.value))} />
                <input className={styles.formInput} type="text" placeholder="Digite sua altura" onChange={e => setAltura(parseFloat(e.target.value))} />
            </form>
            <div className={styles.mensagem}>
            {verMensagem && (
                mensagem
            )}
            </div>
        </div>
    )
}

export default Calculadora