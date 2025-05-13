import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TelaTarefas from './componentes/TelaTarefas';
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TarefasDetales from './componentes/TarefasDetales';
import TelaLogin from './componentes/TelaLogin';
import RotaPrivada from './rotas/RotaPrivada';

const router = createBrowserRouter(
  [
    {
    path:"/",
    element:<TelaLogin/>
    },
    {
      path:"/tarefaDetalhes",
      element:<TarefasDetales/>
    },
    {
      path: "/tarefas",
      element: (
        <RotaPrivada>
          <TelaTarefas></TelaTarefas>
        </RotaPrivada>
      )
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
