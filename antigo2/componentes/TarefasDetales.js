import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handle_edite_tarefa } from "./TelaTarefas";

const TarefasDetales = () =>{
   // const params = useParams()

const location = useLocation()
const tarefa = location.state || {}

    const navigate= useNavigate()
    const handle_tarefa_buttomclick_voltar = () =>{
        navigate("/")
    }
    const[input_tituloTarefa, setInput_tituloTarefa] = useState(tarefa.titulo)
    const handle_input_tituloTarefa = (campo) =>{
setInput_tituloTarefa(campo.target.value)
    }
    const [radio_finalizada, setradio_finalizada]= useState(tarefa.finalizada)
    const hadle_radiofinalizada = (campo)=>{
setradio_finalizada(JSON.parse(campo.target.value))
    }

    const handle_buttonclick_salvar =() => {
        alert("Taréfa alterada com susseço:")
    const tarefaeditada = {...tarefa, titulo:input_tituloTarefa, finalizada: radio_finalizada}
    handle_edite_tarefa(tarefaeditada)
    navigate("/")
    }
return(
<>
<div className="box">
   {/* <h1 style={{backgroundcolor:"aqua"}}>
        Tarefas: {tarefa.titulo}
    </h1>

    <h2>
Finalizada: {tarefa.finalizada == true?"sim" : "não"}
</h2>*/}

    <div style={{textAlign:"left"}}>
<strong>tarefa:
</strong>
<input type="text" aria-label="titulo" value={input_tituloTarefa} 
onChange={handle_input_tituloTarefa}></input>
</div>
<br></br>
<div style={{textAlign:"left"}}>
<strong>finalizada:<label>
    <input type="radio" value={true} checked={radio_finalizada === true} onChange={hadle_radiofinalizada}>
    </input>

    <span>sim</span>
    </label></strong>
    <label>
        <input type="radio" value={false}
        checked={radio_finalizada==false} 
        onChange={hadle_radiofinalizada}></input>
    </label>
    <span>não</span>
</div>
<br></br><br></br>
<button onClick={handle_buttonclick_salvar}>salvar</button>
<button onClick={handle_tarefa_buttomclick_voltar}>Voltar</button>

'   </div>



</>

)
}
export default TarefasDetales