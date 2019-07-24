const fs = require('fs');
const caminho = __dirname + '/lendoArquivoCliente.json';

//Sincrono ...

const conteudo = fs.readFileSync(caminho);
console.log(conteudo);


//Assincrono ...

fs.readFile(caminho, (err,conteudo) =>{
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host} : ${config.db.port}`)
});

const config = require('./lendoArquivoCliente.json');
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) =>{
   console.log('Conteúdo da pasta ....');
   console.log(arquivos)
});