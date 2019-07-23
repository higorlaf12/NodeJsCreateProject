const moduloA = require ('../../moduloA');
const moduloB = require('../../moduloB');

// O node js por padrão sempre procura o index, entãos e uma pasta tiver index ele vai executar ela.

const pastaIndex = require('./pastaC');

console.log(moduloA.informacoa);
console.log(moduloA.olaMundo);
console.log(moduloA);

console.log(moduloB.bomDia);
console.log(moduloB.boaNoite());
console.log(moduloB);

console.log( pastaIndex.mostrarAlgo());
