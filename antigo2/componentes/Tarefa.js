import React from "react";
import "./Tarefa.css"
import { AiOutlinePlus } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const Tarefa = (props) => {

    return (
        <div  className="tarefa-box" tabIndex="2"  >
            <h1 onClick={() => {props.handle_update_tarefa(props.tarefa.id)}} style={props.tarefa.finalizada?{borderLeft: "6px solid green"}:{borderLeft: "6px solid red"}}
                aria-label={props.tarefa.titulo + (props.tarefa.finalizada? "Tarefa Finalizada ":" Tarefa não finalizada")}>
                {props.tarefa.titulo}
            </h1>
            <div className="grid-botoes">
                <button aria-label="detalhes" className="botao-grid" tabIndex={2} onClick={()=>{props.handle_detales_tarefa(props.tarefa.id)}}><AiOutlinePlus></AiOutlinePlus></button>
                <button aria-label="excluir" className="botao-grid" tabIndex={2}
                onClick={() => {props.handle_delete_tarefa(props.tarefa.id)}}><CgClose></CgClose></button>
            </div>
        </div>
    )

}

export default Tarefa