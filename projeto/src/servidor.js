const porta = 3003
const expres = require('express');
const  app = expres();

// Middleware
app.get('/produtos', (req, res, next) =>{
   console.log('Middleware ...1');
    next();
});

app.get('/produtos', (req, res, next) =>{
    res.send({ nome: 'Notebook', preco : 123.45}) // Converter para JSON
});

// Funciona para todos
// app.use((req, res, next) =>{
//     res.send({ nome: 'Notebook', preco : 123.45}) // Converter para JSON
// });

app.listen(porta, () =>{
    console.log(`Servidor executando na porta : ${porta}`);
});