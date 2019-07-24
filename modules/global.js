// console.log(global);

global.MinhaApp = {

    saudacao () {
        return 'Estou em todos os lugares'
    },

    nome: 'Sistema Legal'

}

// Congelando o Objeto


global.MinhaAppCongelado = Object.freeze({

    saudacao () {
        return 'Estou em todos os lugares'
    },

    nome: 'Sistema Legal'

});