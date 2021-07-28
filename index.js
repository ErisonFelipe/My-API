const express = require('express');
const path = require('path');
const app = express();

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express({extend: true}));
app.use(express.json());
app.use(express.static('public'));

var usuarioRouter = require('./routes/usuarios.routes');
var petsRouter = require('./routes/pets.routes');
var usarioLogin = require('./routes/usuaLogin.routes');

app.use(usuarioRouter);
app.use(petsRouter);
app.use(usarioLogin);

app.listen(3030,()=>{
    console.log("Servidor rodando na porta 3030!")
});