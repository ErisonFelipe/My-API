const express = require('express');
const app = express();

app.use(express({extend: true}));
app.use(express.json());

var usuarioRouter = require('./routes/usuarios.routes');
var petsRouter = require('./routes/pets.routes');
var usarioLogin = require('./routes/usuaLogin.routes');

app.use(usuarioRouter);
app.use(petsRouter);
app.use(usarioLogin);

app.listen(3030,()=>{
    console.log("Servidor rodando na porta 3030!")
});