console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

const logThis = () => {
    console.log('Dentro de um função ....');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
};

function logThisFalse() {
    console.log('Dentro de um função ....');
    console.log(this === exports)
    console.log(this === module.exports);
    console.log(this === global);
}

logThis();

logThisFalse();