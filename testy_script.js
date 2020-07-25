'use strict';
let metallica = ['het','ham','truch'];
console.log(metallica);

let a = prompt('Брать ли Ульриха?', '');

if(a == 'да'){
    metallica.push('ulr');
    console.log(metallica);
}else{
    console.log(metallica);
}