import React from "react";
import useUsuario from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";
import { EmailAuthCredential } from "firebase/auth/web-extension";
const TelaCadUsuario = () =>{
const {setEmail, setSenha, erro, cadUsuario} = useUsuario()
const navigate = useNavigate()
const clickVoltar = () => {
navigate("/")    
}
return(
    <div className="box">
        <h4> Tela de Cadastro de Usuario.</h4>
        <div style={{color:"red"}}>
{erro? <p aria-label="mensagem de erro">{erro}</p>
:null}

        </div>
        <form onSubmit={cadUsuario}>
<div style={{display:"flex",alignItems:"center",gap:"10px", whiteSpace:"nowrap"}}>
Email:
<input type="email"
placeholder="email"
aria-label="email"
onChange={(campo)=>{setEmail(campo.target.value)}}></input>
</div>
<div style={{display:"flex",alignItems:"center",gap:"10px", whiteSpace:"nowrap"}}>
Senha:
<input type="password"
placeholder="senha"
aria-label="senha"
onChange={(campo)=>{setSenha(campo.target.value)}}></input>
</div>
<button type="submit" style={{padding:"10px"}}>Cadastrar</button>
<button style={{padding:"10px"}} onClick={clickVoltar}>Voltar</button>
        </form>
    </div>

)
}
export default TelaCadUsuario