import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tarefa.css"
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const TelaLogin =() =>{
const [email,setEmail] = useState("")
    const[senha, setSenha] = useState("")
const[erro, seterro] = useState("")
const navigate = useNavigate()
const fazerlogin =async (e) =>{
e.preventDefault()
seterro("")
try {
    await signInWithEmailAndPassword(auth, email, senha)
    navigate("/tarefas")
    
} catch (error) {
    seterro("Email ou Senha invalido.")
}
}
return(
    <div className="box">
<h1>
    APP - Gestão de Tarefas
</h1>
<h2>
    Tela de Login
</h2>
<div style={{color:"red"}} >
{erro?<p aria-label="menssagem de erro">{erro}</p>:null}
</div>

<form onSubmit={fazerlogin}>
    <div style={{textAlign:"center",padding:"10px"}}>
<input type="email" placeholder="email" value={email} aria-label="email"
onChange={(campo)=> {setEmail(campo.target.value)}}></input>
</div>
<div  style={{textAlign:"center",padding:"10px"}}>
<input type="password" placeholder="senha"
value={senha}
aria-label="senha" onChange={(campo) => {setSenha(campo.target.value)}}></input>
</div>
<button type="submit" style={{padding:"10px"}}>Entrar</button>

</form>
    </div>
)
}
export default TelaLogin