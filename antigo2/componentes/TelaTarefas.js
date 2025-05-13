import React, { useEffect, useState } from "react";
import Tarefa from "./Tarefa";
import FormCadTarefa from "./FormCadTarefa";
import TarefasHeader from "./TarefasHeader";
import { useNavigate } from "react-router-dom";


const TelaTarefas = () => {

    /*const [listaTarefas, setListaTarefas] = useState(
        [
            {
                id: 1,
                titulo: "Estudar Algoritmo",
                finalizada: true
            },

            {
                id: 2,
                titulo: "Revisar Conteúdo",
                finalizada: false
            },
        ]
    )*/

const[listaTarefas,setListaTarefas] = useState(() => {
    const ListaTarefas_storage = localStorage.getItem("listaTarefas")
    return ListaTarefas_storage?JSON.parse(ListaTarefas_storage):[]

})
//atualizar ostoradi sempre que a lista mudar
useEffect(() =>{
localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas))
},[listaTarefas])
    const handle_add_tarefa = (titulo_tarefa) => {

        const novaListaTarefas = [... listaTarefas, 
            {
                id: Math.random(10),
                titulo: titulo_tarefa,
                finalizada: false
            }
        ]

        setListaTarefas(novaListaTarefas)

    }
    const handle_update_tarefa = (id_tarefa) => {
        const novaListaTarefas = listaTarefas.map(tarefa => {
            if(tarefa.id === id_tarefa){
                alert (tarefa.titulo + " finalizada: " + (tarefa.finalizada?"sim":"não") )
                return{... tarefa, finalizada:! tarefa.finalizada}
                
            } else{
                return tarefa
            }
        })
        setListaTarefas(novaListaTarefas)
    }
     const handle_delete_tarefa = (id_tarefa) => {
        const novaListaTarefas = listaTarefas.filter(tarefa => tarefa.id !== id_tarefa)
        setListaTarefas(novaListaTarefas)
        alert("Tarefa excluida com sucesso.")
     }

     const naviget = useNavigate()
     
     const handle_detales_tarefa = (id_tarefa) =>{

        const tarefa = getTarefa(id_tarefa)
        naviget("/tarefa",{state:tarefa})
    }

const getTarefa = (id_tarefa) =>{
    const tarefa = listaTarefas .filter(tarefa => tarefa.id == id_tarefa)
    return tarefa[0]
}
    return(
        <>
        <TarefasHeader/>
            <div className="box">
                <FormCadTarefa handle_add_tarefa={handle_add_tarefa}></FormCadTarefa>
               
                {
                listaTarefas.length == 0 ?(<p>Nenhuma Tarefa cadastrada</p>):
                listaTarefas.map(tarefa => 
                <Tarefa tarefa={tarefa} handle_update_tarefa={handle_update_tarefa}
                handle_delete_tarefa={handle_delete_tarefa} handle_detales_tarefa = {handle_detales_tarefa}></Tarefa>)}
            </div>


        </>
    )


}
export const handle_edite_tarefa = (tarefa_editada) =>{
    console.log(tarefa_editada)
var ListaTarefas_storage = localStorage.getItem("listaTarefas")
ListaTarefas_storage = ListaTarefas_storage?JSON.parse(ListaTarefas_storage):[]
const novaListaTarefas = ListaTarefas_storage.map(tarefa =>{
    if(tarefa.id === tarefa_editada.id){
return tarefa_editada
    }else{
        return tarefa
    }
})
localStorage.setItem("listaTarefas", JSON.stringify(novaListaTarefas))
}

export default TelaTarefas