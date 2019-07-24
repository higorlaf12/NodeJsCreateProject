const {
    PromiseStatuses,
    PROMISE_RESOLVED,
    promiseStatus,
    promiseState,
    isPromiseResolved,
    isPromiseNotRejected 
}  = require('promise-status-async');

let promise = new Promise((resolve, reject ) =>{
    setTimeout(() =>{
        resolve('A promise 1 foi  resolvida');
    }, 2000);
})

console.log( promiseStatus(promise) != PROMISE_RESOLVED)

while(promiseStatus(promise) != PROMISE_RESOLVED){
    setTimeout(() =>{
        console.log('Aguardar')
    },3000);
}



let promise2 = new Promise((resolve, reject ) =>{
    setTimeout(() =>{
        resolve('A promise 2 foi  resolvido');
    }, 2000);
})
promise.then(( resultado) =>{
    console.log(resultado)
})
Promise.all([promise,promise2]).then(([resultado,resultado2]) =>{
    console.log('Todas as promise foram resolvidas');
    console.log(resultado+'\n'+resultado2)
}).catch((error) =>{
    console.log('Uma das promises foi rejeitado')
    console.log(error)
})

