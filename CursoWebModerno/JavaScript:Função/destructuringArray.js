const [a] = [10]

console.log(a)


function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)
}

const obj = {min: 40 , max : 50};
console.log(rand({min : 25, max : 50}))
console.log(rand(obj))
console.log(rand({min : 905}))
console.log(rand({}))

//Vai dar errado
console.log(rand())
