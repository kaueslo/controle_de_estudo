import React from "react";
import lista from './Lista.module.scss';

function Lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: '.Net core',
        tempo: '02:00:00'
    },{
        tarefa: 'Banco de dados',
        tempo: '02:00:00'
    }]
    return (
        <aside className={lista.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={lista.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;