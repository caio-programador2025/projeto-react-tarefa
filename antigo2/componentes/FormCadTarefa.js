import React, { useState } from "react";

const FormCadTarefa = (props) => {

    const [input_tituloTarefa, setInput_tituloTarefa] = useState("") 

    const handle_input_tituloTarefa = (campo) => {
        setInput_tituloTarefa(campo.target.value)
    }

    const handle_buttonClick_add_tarefa = () => {
       props.handle_add_tarefa(input_tituloTarefa)
        setInput_tituloTarefa("")
    } 

    return(
        <div style={{display:"flex"}}>
            <input type="text" aria-label="tarefa" style={{width:"80%"}} 
            value={input_tituloTarefa} onChange={handle_input_tituloTarefa} tabIndex="1"></input>
            <button onClick={handle_buttonClick_add_tarefa} tabIndex="2">Adicionar Tarefa</button>
        </div>
    )


}

export default FormCadTarefa


