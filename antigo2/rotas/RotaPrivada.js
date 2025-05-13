import React, { useEffect } from "react";
import "react-firebase-hooks/auth"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const RotaPrivada = ({children}) => {
const[usuario, carregndo] = useAuthState(auth)
const navigate = useNavigate()
useEffect(() =>{
    if(!carregndo && !usuario){
navigate("/")
    }
},[usuario, carregndo, navigate])
if(carregndo){
return (
    <div>Carregando...</div>
)
}
return(
    usuario? children: null
)
}

export default RotaPrivada