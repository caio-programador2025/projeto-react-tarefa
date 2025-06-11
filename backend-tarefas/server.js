import express from "express";
import cors from "cors";
import connection from "./db.js";

const app = express()
const port = 3001
app.use(cors())
app.use(express.json())

// criação automatica da tabela
const criar_tabela = async () =>{
    await connection.query(`
        create table if not exists tarafas(
        id int auto_increment primary key,
        titulo varchar(255) not null,
        finalizada boolean default false,
        uid varchar(255) not null
        )
        `)
console.log("tabela criada /verficada com sucesso.")
    }

    criar_tabela()
//Buscar todas as tarefas 
app.get("/tarefas", async(req, res) =>{
try {
    const [tarefas] = await connection.query("select * from tarefas")
    res.json(tarefas)
} catch (error) {
    res.status(500).send("Erro ao buscar tarefas no servidor: " +error)
}
})

//Adicionar nova tarefa
app.post("/tarefas", async (req, res) =>{
    try {
        const tarefa = req.body
        await connection.query("insert into tarefas(titulo, uid) values (?, ?)", [tarefa.titulo, tarefa.uid])
        res.status(201).send("tarefa cadastrada com sucesso:")
    } catch (error) {
        res.status(500).send("Erro ao cadastrar tarefas no servidor: " +error)
    }
})
// atualizar tarefas
app.put("/tarefas/:id", async(req, res)=>{
    try {
        const {id} = req.params
        const tarefa = req.body
        await connection.query("update tarefas set titulo = ? , finalizada = ? where id = ?", [tarefa.titulo, tarefa.finalizada, id])
        res.status(200).send("tarefa atualizada com sucesso:")
    } catch (error) {
        res.status(500).send("erro ao alterar tarefa no servidor: " + error)
    }
})
// excluindo tarefa
app.delete("/tarefas/:id", async(req,res)=>{
    try {
        const {id} = req.params
        await connection.query("delete from tarefas where id = ?",[id])
        res.status(200).send("tarefa excluida com sucesso:")
    } catch (error) {
        res.status(500).send("erro ao excluir tarefa no servidor:"+ error)
    }
})
//Iniciando o servidor
app.listen(port, () =>{
    console.log(`Servidor backend rodando na porta  ${port}`)
})