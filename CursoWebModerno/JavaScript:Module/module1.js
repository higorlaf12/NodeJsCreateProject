let cavalheiro = () =>{
        let cat = {}

        return cat = {
            show : 'Times',
            nome: 'nois que voa bruxo'
        }
}

this.ola = 'fala pessoal'
exports.bemVindo = 'Bem vindo  ao node !'
module.exports.ateLogo = {
        nome : cavalheiro(),
        show: 'vamos pra lá',
        boaNoite() {
            return 'Noite'
        }
}

let verificarSeEntra = (dados) =>{
    let conf = {}    
   // (dados === true )  ?  conf = {name : 'Higor',idade : '22'}  :  conf = {name : 'João',idade: '35'}

    if(dados === true){
        conf = {name : 'Higor',idade : '22'}
    }else{
        conf = {name : 'João',idade: '35'}
    }
    return conf
}

module.exports.vamosNessa =  verificarSeEntra

function teste (dados){
    return dados;
}

module.exports.algoritmo = teste 