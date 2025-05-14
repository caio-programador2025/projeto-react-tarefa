import React from "react";
import "./Tarefa.css";
import FormCadTarefa from "./FormCadTarefa";
import useTarefa from "../hooks/useTarefa";
import { AiOutlinePlus } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const TelaTarefas = () =>{

const {adicionar_tarefa, listaTarefas, exibir_detalhe_tarefa, excluir_tarefa} = useTarefa()

return(
    <>
    <h1 
    style={{textAlign:"center"}}
    tabIndex={1}
    >
        Minhas Tarefas
        </h1>
    <div className="box">
        <FormCadTarefa 
        adicionar_tarefa={adicionar_tarefa}
        >
        </FormCadTarefa>
        {
            listaTarefas.length==0?(<p>Nenhuma tarefa cadastrada.</p>):
        listaTarefas.map(tarefa => 
            
        <div className="tarefa-box"
        key={tarefa.id}
        tabIndex={1}
        style={tarefa.finalizada?{borderLeft:"6px solid green"}:{borderLeft: "6px solid red"}}
        aria-label={tarefa.finalizada?"Tarefa concluída. ":"Tarefa não concluída."}
        >
            <p style={{textAlign: "left", width:"100%"}}>
                {tarefa.titulo}
            </p>
            <div className="grid-botoes">
                <button
                aria-label="detalhes" 
                className="botao-grid" 
                tabIndex={2} 
                onClick={() => 
                    {exibir_detalhe_tarefa(tarefa.id)}
                }>
                    <AiOutlinePlus />
                </button>

<button 
aria-label="excluir" 
className="botao-grid" 
tabIndex={2} 
onClick={() =>
{excluir_tarefa(tarefa.id)}
}>
    <CgClose />
    </button>
            </div>
        </div>
        )}
    </div>
    </>
)
}
export default TelaTarefas;