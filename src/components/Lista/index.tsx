import Item from "./Item";
import lista from './Lista.module.scss';
import { ITarefa } from "../../types/tarefa";

function Lista( {tarefas} : {tarefas: ITarefa[]}){
    return (
        <aside className={lista.listaTarefas}>
            <h2> Estudos do dia </h2>
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