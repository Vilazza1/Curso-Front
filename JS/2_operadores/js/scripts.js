// 1 - Number 

console.log(typeof 2);
console.log(typeof 5.15);
console.log(typeof -127);

// 2 - Ops. aritmérocas

console.log(2 + 4);
console.log(10 - 5);
console.log(5 * 4);
console.log(10 / 2);

console.log(5 + (4 * 2));

// 3 - Special numbers

console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12*"asd");

console.log(typeof NaN);

// 4 - String

console.log( typeof "Um Texto");
console.log( typeof `Mais um texto`);

// 5 - Símbolos especiais em string

console.log("Testa a \n quebra de linha");

console.log("Espaçamento \t de tab");

// 6 - concatenção

console.log("Oi," + "tudo" + "bem?");

// 7 - Interpolação (Template Strings)

console.log(`A soma de 2 + 2 é ${2 +2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

//8 - Booleanos

console.log(true);

console.log(5 > 30);

console.log(30 > 10);

console.log(typeof false);

// 9 - Comparações

console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Valor Idêntico

console.log(9 == "9");

console.log(9 === "9");

console.log (9 !== "9");

console.log (9 != "9");

// 11 - Operadores Lógicos

console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Vinicius" === 1);

console.log(5 > 2 || "Vinicius" === 1);

console.log(5 < 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// 12 - Empty Values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - Conversão automatica

console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);



