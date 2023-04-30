"use strict";

// Створюємо порожній масив
const array2 = new Array()
// console.log('array2: ', array2);

const array = []
const array3 = []

// console.log('array: ', array);

// console.log('array2: ', array2);

// console.log(array3 === array);

const array4 = new Array(1,2,3, {name: "Anna"}, "23", "items", ["2",123], undefined, null, NaN)
// console.log('array4: ', array4);
const array5 = [1,2,3,4,5,3,42]
// console.log('array5: ', array5);

const array6 = new Array(5)
// console.log('array6: ', array6.length);

// Додаємо значення до масиву

array6[0] = "Привіт"
// console.log('array6[1]', array6[1]); // undefined
array6[1] = "Привіт"
array6[2] = "Привіт"
array6[3] = "Привіт"
array6[4] = "Привіт"
array6[5] = "Привіт"


array6.length = 3;

// console.log('array6', array6);


// Довжина масиву
const array7 = [1,2,3,4,5,3,42];
// console.log("array7", array7.length, "typeof - ", typeof array7.length);


// let result = array7[0] + array7[1] + array7[2] + array7[3] + array7[4] + array7[5]

// Проходимось циклом по масиву



// for (let i = 0; i < array7.length; i++) {
//     // console.log(`i - ${i}" - array7[${i}] = ${array7[i]}`);
// }


// Підрахунок суми елементів масиву 
let result = 0;

// for (let i = 0; i < array7.length; i++) {
//     result += array7[i]; // result = result + array[i]
// }
// console.log(result);

// Двовимірні масиви 

let array8 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// console.log(array8[1][1]);
// console.log(array8[2][2]);

for (let i = 0; i<array8.length; i++){
    let k = array8[i]
    for(let j = 0; j<k.length; j++){
        // console.log(k[j]);
    }
}

// Зміна масиву за допомогою функції

let name = ["Jack", "Anna", "John", "Dilan", "Brandon", "Joe Biden"]
function setValueOfArray (array, index, newValue){
    array[index] = newValue
    return array
}

// console.log(setValueOfArray(name, 2, "Trump"));

// Деструктуризація масиву
const red = "red";

let rbg = [255,255,0];

const [red1 = red, blue, green] = rbg;

console.log('red1: ', red1);
console.log('blue: ', blue);
console.log('green: ', green);

// ... три крапочки це оператор розпакування

console.log(...rbg);

let arr1 = ["A", "B", "C"];
let arr2 = ["X", "Y", "Z"];

let result2 = [...arr1, ...arr2];
console.log('result2: ', result2);
