import React from 'react';
import Botao from '../Button';
import formulario from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return(
            <form className={formulario.novaTarefa}>
                <div className={formulario.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input 
                        type="text" 
                        name='tarefa'
                        id='tarefa'
                        placeholder='O que você quer estudar?'
                        required
                    />
                </div>
                <div className={formulario.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                     </label>
                    <input 
                        type="time"
                        step='1'
                        name='tempo'
                        id='tempo'
                        min='00:00:00'
                        max='04:00:00'
                        required
                    />
                </div>
                <Botao>
                    Adicionar
                </Botao>
            </form>
        )
    }
}

export default Formulario;