const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//Sem Callback
let notasBaixas = [];

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas);

// Com callback
let notasBaixas2 = [];

notasBaixas2 = notas.filter( (nota) => {
    return nota < 7
});

console.log("Notas usando callback "+ notasBaixas2 );

const notasMenorQue7 = nota => nota < 7;
const  notasBaixas3 = notas.filter(notasMenorQue7 );
console.log("Notas usando callbackNew funcional " + notasBaixas3);