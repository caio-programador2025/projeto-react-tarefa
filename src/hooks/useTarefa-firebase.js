import { getAuth } from "firebase/auth";
import react, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore/lite";


const useTarefafirebase = () => {
    const [id , setId] = useState(null)
    const [titulo, settitulo] = useState("")
    const [finalizada, setfinalizada] = useState(false)
    const [listaTarefas, setListaTarefas] = useState([])


//Recuperendo o usuario do FireBase.//
const auth = getAuth()
const usuario = auth.currentUser

const navigate = useNavigate()
//Função para buscar as tarefas do usuario do firebase.//

const buscaTarefas = async() => {
const colecao_Tarefa = collection(db, "tarefas")
 
 const docs_Tarefas = await getDocs( colecao_Tarefa)

 // Fiutrando as tarefas do usuario logado//
 const listaTarefaUsuario = docs_Tarefas.docs.map(
    doc => ({id: doc.id, 
        ... doc.data()
    }))
    .filter(tarefa => tarefa.uid === usuario.uid)
    setListaTarefas(listaTarefaUsuario)
 


}

    useEffect( () => {
        buscaTarefas() 
    },[usuario ])


    // Função adicionar uma nova tarefa no firebase//
    const adicionar_tarefa = async(titulo) => {
const novaTarefa = {
    titulo: titulo,
finalizada: false, 
uid: usuario.uid
}
try {
    const novoRegistro = await addDoc(collection(db, "tarefas"), novaTarefa)
     alert ("Tarefa Adicionada com sucesso")

} catch (error) {
    alert ("Erro ao adicionar a tarefa" + error)
}
    }


    //função para exibir detalhes da tarefa//
    const exibir_detalhe_tarefa = (id) => {
        const tarefa = listaTarefas.find(tarefa => tarefa.id = id)
        navigate("/tarefaDetalhes", {state: tarefa})
    }
    const excluir_tarefa = async(id) => {
try {
    await deleteDoc(doc(db, "tarefas" , id))

    buscaTarefas()

    alert ("tareffa excluida com sucesso")  
} catch (error) {
    alert("tarefa nao encontrada" + error)
}
    }
    
    //função para alterar uma tarefa no fire base

    const alterar_tarefa = async(tarefa_editada) =>{
try {
    const registro_tarefa = doc(db,"tarefas", tarefa_editada.id)
    await updateDoc(registro_tarefa,{
        titulo: tarefa_editada.titulo,
        finalizada: tarefa_editada.finalizada
    }
    )
    buscaTarefas()
    alert(" Tarefa alterada com sucesso:")
} catch (error) {
    alert("Erro ao alterar tarefa:")
    
}
    }
    return {
        id, setId,
        titulo, settitulo,
        finalizada, setfinalizada,
        listaTarefas,setListaTarefas,
        exibir_detalhe_tarefa,
        excluir_tarefa,
        usuario,
        adicionar_tarefa,
        

alterar_tarefa    }
}
export default useTarefafirebase