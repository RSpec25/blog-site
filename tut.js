const name = 'yosh';
console.log(name);

const greet = (name) => {
    console.log(`hello, ${name}`); //template string ``
}
greet(name);
// global obj
// console.log(global); - print global obj
setTimeout(() => {
    console.log('yo yo')
}, 3000);
// settimeout- run once
// setinterval- run foreevr after the mention interval - clearinterval to stop
