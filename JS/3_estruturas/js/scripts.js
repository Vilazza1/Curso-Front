// 1 - variáveis 

let nome = "Vinicius";

console.log(nome);

nome = "Vilazza";

console.log(nome);

const idade = 31;

console.log(idade);

// 2 - mais sobre varialves 

//let 2teste = "inválido"
//let @teste = "inválido" 

let a = 10,
    b = 20,
    c = 30;

console.log(a, b, c);

const nomecompleta = "vinicius vilaça";

const nomeCompleto = "Vinicius Vilaça";

console.log(nomecompleta);

console.log(nomeCompleto);

let _teste = "ok";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - função: prompt

const age = prompt("Digite a sua idade:");

console.log(`Você tem ${age} anos.`);

// 4 - Alert

alert("Testando")

const z = 10

alert(`O número é ${z}`)

// 5 - Math

console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console

console.log("teste!");

console.error("erro!");

console.warn("aviso!")

// 7 - if

const m = 10;

if (m > 5) {
    console.log("M é maior que 5!")
}

const user = "João";

if (user === "João") {
    console.log("Olá João");
}

if (user === Maria) {
    console.log("Olá Maria!")
}

// 8 - else

const loggedin = false

if (loggedin) {
    console.log("Está autenticado!")
} else {
    console.log("Não esta autenticado!")
}

const q = 10
const w = 25

if (q > 5 && w > 20) {
    console.log("Números mais altos")
} else {
    console.log("Os números não são mais altos")
}

// 9 - else if

if (1 > 2) {
    console.log("Teste");
} else if (2 > 3) {
    console.log("teste2");
} else if (5 > 1) {
    console.log("agora sim!");
}

const userName = "Vinicius"
const userAge = 21

if (userName === "Felipe") {
    console.log("Bem vindo Felipe")
} else if (userName === "Vinicius" && userAge === 21) {
    console.log("Olá Vinicius vc tem 21 anos")
} else {
    console.log("Nennhuma contição aceita");
}

// 10 - while

let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// loop infinito

//let x = 10

//while(x > 5){
//  console.log(`Imprimindo ${x}`)
//}

// 11 - do while 

let o = 10

do {
    console.log(`Valor de o: ${o}`);
    o--
} while (o > 1);

// 12 - for

for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...");
}

let r = 0

for (r; r > 0; r = r - 1) {
    console.log("O r esta dimunuindo")
}

// 13 - identação

for (let u = 0; u < 10; u++) {
    if (u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if (u / 2 === 0) {
            console.log("deu 0")
        }
    }
}

// 14 - break

for (let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`);

    if (g === 12){
        console.log("O g é 12!");
        break;
    }
}

// 15 - continue

for(let s = 0; s < 10; s = s + 1){
    // operador resto = %
    if(s % 2 == 0){
        console.log("Número par!");
        continue;
    }
    console.log(s);
}

// 16 - switch

const job = "asd"

switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break
    case "Musico":
        console.log("Você é um Musico");
        break;
    case "engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Não foi encontrada");
}





