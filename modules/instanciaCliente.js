const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(`Apresentando o valor com cache na memoria : (${contadorB.valor})`);

contadorC.inc();
contadorC.inc();
console.log(`Apresentando o valor sem o cache pois é uma nova instancia: (${contadorD.valor})`);