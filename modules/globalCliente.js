require('./global');

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita';

console.log(`Modificanod o objeto ( ${MinhaApp.nome} )`);

MinhaAppCongelado.nome = 'Pode mudar ?';

console.log(`Objeto foi congelado assim não vai poder ser alterado  ( ${MinhaAppCongelado.nome} )`);