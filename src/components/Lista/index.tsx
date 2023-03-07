import React, { useState } from "react";
import Item from "./Item";
import lista from './Lista.module.scss';

function Lista(){
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: '.Net core',
        tempo: '02:00:00'
    },{
        tarefa: 'Banco de dados',
        tempo: '02:00:00'
    }]);
    return (
        <aside className={lista.listaTarefas}>
            <h2 onClick={() => {
                console.log('h2 clicado', tarefas)
                setTarefas([...tarefas, {tarefa: 'Boas práticas em C#', tempo: '05:00:00'}]);
            }
                 }> 
                
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    /*
                        Uma forma de fazer
                        tarefa={item.tarefa}
                        tempo={item.tempo} 
                    */
                   key = {index}
                   {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;