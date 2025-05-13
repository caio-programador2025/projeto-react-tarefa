import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import { useNavigate } from "react-router-dom";
const useTarefa = () =>{
    const [tarefa, setTarefa] = useState({
        id:null,
        titulo:"",
        finalizada: false

    })
const [listaTarefas, setlistaTarefa] = useState (
    () =>{
        const listaTarefas_storage = localStorage.getItem("listaTarefa") 
        return listaTarefas_storage?JSON.parse(listaTarefas_storage):[]
    }
)
useEffect(
    () =>{
localStorage.setItem("listaTarefa", JSON.stringify(listaTarefas))

    },[listaTarefas]
)

const adicionar_tarefa = (titulo) =>{
setTarefa({
    id: Math.random(),
    titulo: titulo,
    finalizada: false
}
)
const novaListatarefa = [...listaTarefas, tarefa]
setlistaTarefa(novaListatarefa)
alert("tarefa adicionada com sucesso:")
}

const excluir_tarefa = (id) =>{
const novaListatarefa = listaTarefas.filter(tarefa => tarefa.id !== id)
setlistaTarefa(novaListatarefa)
alert("tarefa excluida com sucesso:")
}

const navigate = useNavigate()
const exibir_detalhes_tarefa = (id) =>{
const tarefa =listaTarefas.find(tarefa => tarefa.id == id) 
navigate("/tarefaDetalhes", {state:tarefa})
}

const altera_tarefa= (tarefa_editada) =>{
const novaListatarefa = listaTarefas.map(tarefa =>{
    if(tarefa.id == tarefa_editada){
return tarefa_editada
    }else{
        return tarefa
    }
})
setlistaTarefa(novaListatarefa)
alert("tarefa editada com sucesso:")
}

return({

    listaTarefas, 
    adicionar_tarefa,
    excluir_tarefa,
    exibir_detalhes_tarefa,
altera_tarefa
})
}
export default useTarefa