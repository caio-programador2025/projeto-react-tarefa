import React, { useState } from "react";
import "./App.css"

const App = () => {

  const [msg, setMsg] = useState("App da Joyce")

  const [cont, setCont] = useState(0)

  return (
    <>
      <h1 className="box">{msg}</h1>
      <div style={{textAlign:"center"}}>
        <button onClick={() => {
          setMsg("Hello React!!")
          setCont(cont + 1)
          }}>Nova Mensagem</button>
      </div>
      <h2 className="box" role="">Qtde de clicks: {cont}.</h2>
      
    </>
  )

}

export default App