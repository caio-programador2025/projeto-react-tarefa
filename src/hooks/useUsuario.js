import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const useUsuario = () =>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")
    const navigate = useNavigate()
    
    const fazerLogin = async(e)=>{
        e.preventDefault()
        setErro("")
        try {
            await
            signInWithEmailAndPassword(auth, email, senha)
            navigate("/tarefas")
    
        } catch (error) {
            setErro("Email ou senha inválido. ")
        }
    }
    const fazerLogout =  async(e) =>{
e.preventDefault()
setErro("")
try{
await signOut(auth)
navigate("/")
}catch(error){
setErro("Erro ao fazer Logout: ",error)
}
    }
    const cadUsuario = async (e) =>{
    e.preventDefault()
    setErro("")
    try{
await createUserWithEmailAndPassword(auth,email,senha)
alert("cadastro realizado com sucesso.")
navigate("/")

    }catch(error){
setErro("Erro ao cadastrar:"+ error.message)
    }
}

return ({
erro,    
    setEmail,
    setSenha,
    cadUsuario,
    fazerLogin,
    fazerLogout
    
})
}
export default useUsuario