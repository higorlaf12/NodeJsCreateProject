// Novo recurso do ES2015 Com Objeto

const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco : {
        logradouro : 'Rua ABC',
        numero : 1000
    }
}

const {nome , idade} = pessoa;
console.log (nome,idade);

// ou 

const {nome: n , idade: i } = pessoa;
console.log(n,i);

const {sobrenome , bemHumorado = true} = pessoa;
console.log(sobrenome,bemHumorado);

const {endereco : {logradouro,numero}} = pessoa
console.log(logradouro,numero)