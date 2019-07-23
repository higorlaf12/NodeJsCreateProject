// Entrando na URL 'http://files.cod3r.com.br/curso-js/funcionarios.json' pegando os dados e encontrando a mulher chinesa com o menor salario.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})