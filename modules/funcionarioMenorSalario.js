// Entrando na URL 'http://files.cod3r.com.br/curso-js/funcionarios.json' pegando os dados e encontrando a mulher chinesa com o menor salario.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// Maneira feita por mim
// let guardarMulher =[];
// let menor = 0;
//
// const buscaMenorSalario = (vetor) =>{
//     for( let i = 1; i < vetor.length ; i++){
//         if(vetor[i].salario < vetor[menor].salario){
//             menor = i;
//         }
//
//     }
//     return vetor[menor];
// }
//
// axios.get(url).then(response => {
//
//     const funcionarios = response.data;
//     for (let index in funcionarios){
//         if (funcionarios[index].genero === 'F'){
//             if (funcionarios[index].pais === 'China'){
//                 guardarMulher.push(funcionarios[index]);
//             }
//         }
//     }
//
//     console.log(buscaMenorSalario(guardarMulher));
// });

// Maneira feita pelo instrutor

const chinesas = f => f.pais === 'China';
const mulher = f => f.genero === 'F';
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then( response =>{
    const funcionarios = response.data;
    const func = funcionarios
        .filter(chinesas)
        .filter(mulher)
        .reduce(menorSalario);

    console.log(func)
});