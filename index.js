//const steamLibrary = require ('./steamLibrary');
const Steam = require ('./Steam');
const steamLibrary = require('./steamLibrary');

const list= new Steam (steamLibrary);

let pippo= list.steamLibrary.Gabriele;
pippo= 2;
list.steamLibrary.Gabriele= pippo;

console.log(pippo);
console.log(steamLibrary.Gabriele);


console.log(list.steamLibrary.Gabriele);
console.log(steamLibrary.Riccardo);
//console.log(steamLibrary.Gabriele);