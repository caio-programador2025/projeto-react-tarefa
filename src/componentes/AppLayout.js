import React from "react";
import TelaMenu from "./TelaMenu";
import { Outlet } from "react-router-dom";
import TelaRodape from "./TelaRodape";
const AppLayout = ()=>{
    return(
<>
<div>
    <TelaMenu></TelaMenu>
    <main className="container">
    <Outlet></Outlet>
    </main>
    <TelaRodape/>
</div>
</>
  )  
}
export default AppLayout