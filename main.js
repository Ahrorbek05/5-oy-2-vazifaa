// 1.
// function ortachasiniTopish(arr) {
//     let uzunligi = arr.length;
//     let ortachasi = Math.floor(uzunligi / 2);
//     let uchtasi = arr.slice(ortachasi - 1, ortachasi + 2);
  
//     return uchtasi;
// }
// console.log(ortachasiniTopish([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 2.
// function tasodifiyRaqam(arr, counter, i) {
//     function asosiy() {
//       return Math.floor(Math.random() * 100) + 1;
//     }

//     for (let i = 0; i < counter; i++) {
//       arr.splice(i + i, 0, asosiy());
//     }
  
//     return arr;
// }
// let arr = [1, 7, 12, 20, 52];
// let counter = 9;
// let i = 19;
  
// let yangi = tasodifiyRaqam(arr.slice(), counter, i);
// console.log(yangi);

// 3.
// function MassivBirlashtirish(arr1, arr2, arr3){
//     let massiv = arr1.concat(arr2);
//     let birlashtir = massiv.slice(0, arr3.length).concat(arr3).concat(massiv.slice(arr3.length));
//     return birlashtir;
// }
// let arr1 = [1, 3, 9];
// let arr2 = [12, 15, 16];
// let arr3 = [17, 18, 19];
// console.log(MassivBirlashtirish(arr1, arr2, arr3));

// 4.
// function argumentIndex(massiv, qiymat) {
//     let a = massiv.indexOf(qiymat);
//     if( a !== -1){
//         return Math.floor( a ** 3);
//     } else {
//         return false;
//     }
// }  
// let m = [1, 5, 9, 12, 18];
// let q = 12;
// console.log(argumentIndex(m, q));

// 5.
// function oxirgiIndex(massiv, qiymat) {
//     let a = -1;
//     for(let i = massiv.length - 1; i >= 0; i++){
//         if(massiv[i] === qiymat){
//             a = i;
//             break;
//         }
//     }
//     return a; 
// }
// let m = [5, 6, 9, 15, 18, 25, 66, 99, 101];
// let q = 101;
// console.log(oxirgiIndex(m, q));

// 6.
// const student = {
//     name: "Ahmadjon",
//     age: 19,
//   };

// function obeykt(obj) {
//     let kalit = Object.keys(obj);
//     let massiv = [];
//     for (const key of kalit) {
//       massiv.push([key, obj[key]]);
//     }
//     return massiv;
// } 
// console.log(obeykt(student));
    
// 7.
// let arr = [1, 5, 6, 9, 88];
// if ( arr.includes(88)){
//     console.log(true);
// } else {
//     console.log(false);
// }

// 8.
// function UshXonaliToqSonlar(sonlar) {
//     let ToqSonlar = [];
//     sonlar.forEach(sonlar => {
//       if (sonlar.toString().length === 3 && sonlar % 2 !== 0) {
//         ToqSonlar.push(sonlar);
//       }
//     });
//     if (ToqSonlar.length === 0) {
//       return null;
//     }
//     let yigindi = ToqSonlar.reduce((sum, son) => sum + son, 0);
//     let ortacha = yigindi / ToqSonlar.length;
//     return ortacha;
// }
// let sonlar = [111, 222, 333, 444, 555, 777];
// console.log(UshXonaliToqSonlar(sonlar));

// 9.
// function yangiMassiv(arr) {
//     let massiv = arr.map(massiv => {
//       if (massiv % 2 === 0) {
//         return massiv ** 2;
//       } else {
//         return massiv ** 3;
//       }
//     });
//     return massiv;
// }
// let arr = [1, 5, 9, 14, 15];
// let massiv = yangiMassiv(arr);
// console.log(yangiMassiv(arr));

// 10.
// function oxirgiElementlar(arr) {
//     let elementMassiv = arr.map(arr => arr[arr.length - 1]);
//     return elementMassiv;
// }
// console.log(oxirgiElementlar(["anjir", "hurmo", "mandarin", "ananas", "dovcha",  "olma", "nok"]));

// 11.
// function filterStr(arr) {
//     let res = arr.filter(arr => arr.length < 4);
//     return res;
// }
// console.log(filterStr(['bek', 'xayr', 'bye']));

// 12.
// let user = [
//     {name:"John", age: 5},
//     {name:"Doe", age: 20},
//     {name:"Alex", age: 50},
// ];
// function odamlar(arg) {
//     let res = user.some(user => user.age >= 18);
//     return res;
// }
// console.log(odamlar(user));

// 13.
// function uchXonaliSon(sonlar) {
//     let res = sonlar.find(function (value) {
//         return value >= 100 && value <= 999 && value % 5 === 0;
//     });
//     if( res ){
//         console.log(res);
//     } else {
//         console.log( -1 );
//     }
// }
// console.log(uchXonaliSon([12, 55, 225, 505,  1212]));

// IIFE ga oid masalalar

// 1.
// (function () {
//     console.log('hello world');
// })();

// 2.
// (function () {
//     function add() {
//       console.log('salom');
//     }
//     add();
// })();

// 3.
// (function () {
//     function hello() {
//       console.log('salom');
//     }
    
// })();
// hello();

// 4.
// (function () {
//     let res = 
// })()

// callback
// function hello(callback) {
//     var a = +prompt('Iltimos Isminggizni kiriting:');
//     callback(a);
// }
// hello();