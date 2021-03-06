/*
    Expressões e operadores

    -Expressions
    -Operatiors:
        *Binary
        *Unary
        *Ternary
*/

// expressões são qualquer linhas de códigos que resolvam algo no JS
/*
colocar ponto e vírgula ao final de expressões no JS é opcional, porém em casos de funções aut-executáveis pode trazer problemas, por garantia é melhor colocar sempre quew possível assim já nos acostumamos para outra linguagem que seja obrigatória
*/

// operador binário é quando considerando algum cáclulo matemático
let number = 2;
console.log(number + 1);

// operador unário é quando só temos um elemento e iremos incrementar ou decrementar
let number2 = 1;
console.log(++number2);

console.log(typeof number);

/* 
operador ternário, só temos um caso que recebe um valor e uma condição, dependendo da resposta executa algo, parecido com IF ELSE
*/
console.log(true ? 'alo' : 'nada');
console.log(false ? 'alo' : 'nada');

/*
    New:
        *left-hand-side expression
        *criar um novo objeto
*/
let name = new String('Marcos');
name.surName = 'Prado';
let age = new Number(25);
let date = new Date('2021-03-05');

console.log(name, age, date);

/*
    Operadores unários:
        *typeof
        *delete
*/
const person = {
    name: 'Marcos',
    age: 25
}

console.log(person);
delete person.age;
console.log(person);

//Operadores aritméticos:
// multiplicação
console.log(2 * 2);
// divisão
console.log(10 / 2);
// soma
console.log(10 + 5);
// subtração
console.log(5 - 2);
// resto divisão
let remainder;
remainder = 11 % 2;
console.log(remainder);
// incremento
let increment= 0;
increment++; //incrementar após
++increment; //incrementar antes
console.log(increment);
// decremento
let decrement = 2;
decrement--;
decrement--;
console.log(decrement);
// exponencial **
console.log(3 ** 2);

// Grouping operators ()
let total = 2 + 3 * 5;
console.log(total);

let total1 = (2 + 3) * 5;
console.log(total1);

// Operadores de comperação
// Irá comparar valores e retornar um boolean como resposta
let one = 1;
let two = 2;

// == igual
console.log(one == 1); //true
console.log(one == 2); //false
console.log(one == '1'); //temos problemas aqui, pois o js converte a string em number para retornar true

// != diferente
console.log(one != two); //true
console.log(one != 1); //false
console.log(one != '1'); //false

// === estritamente igual
console.log(one === '1'); //false, compara se o tipo e valor são iguais
console.log(one === 1); //true

// !== estritamente diferente
console.log(two !== 2); //false
console.log(two !== '2'); //true 
// > maior que
console.log(one > two); //false
console.log(two > one); //true

// >= maior ou igual que
console.log(one >= 1); //true
console.log(two >= one); //true

// < menor que
console.log(one < two); //true
console.log(two < one); //false

// <= menor ou igual que
console.log(one <= 1); //true
console.log(two <= one); //false

// Operadores de atribuição (assigment)
let x;

console.log(x); //undefined

// assigment
x = 1;
console.log(x); //1

// addition assigment
// x = x + 2
x += 2;
console.log(x); //3

// subtraction assigment
// x = x - 1
x -= 1;
console.log(x); //2

//multiplication assigment
// x = x * 2
x *= 2;
console.log(x); //4

// division assigment
// x = x / 2
x /= 2;
console.log(x); //2

// remainder, exponetiation
//x %= 2;
//console.log(x); //0

x **= 2;
console.log(x); //0

// Operadores lógicos (logical operators)
// valores boolenados que quando verificados irão retornar se é true e false

let pao = true;
let queijo = false;

// AND && todas condições devem ser verdadeiras para retornar true, se tiver um false, o retorno será false
console.log(pao && queijo); //false

// OR || se uma condição for verdadeira, então o retorno será true, caso as duas sejam falsas o retorno é false
console.log(pao || queijo); //true

// NOT ! será a negação, se for true vira false, se for false vira true
console.log(!queijo); //true

// Operador condicional Ternário
// Dependendo da condição, iremos receber valores diferentes

// condição então valor 1 se não valor 2
// condition ? value1 : value2

let pao2 = true;
let presunto = true;

const niceBreakfast = pao && presunto ? 'Café top' : 'Café aceitável';
console.log(niceBreakfast);

// maior que 18
let age2 = 18;

const canDrive = age2 >= 18 ? 'Can drive' : 'Can"t" drive';
console.log(canDrive);

// Operador de String (String operator)
// comparison(comparação)
console.log('a' === 'a');

// concatenation(concatenção)
// retorna a união de duas Strings
let alpha = 'alpha';
console.log(alpha + 'bet' + 's');

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

        *false
        *0
        *-0
        *""
        *null
        *undefined
        *NaN
*/

console.log(false ? 'verdadeiro' : 'falso');
console.log(0 ? 'verdadeiro' : 'falso');
console.log(-0 ? 'verdadeiro' : 'falso');
console.log("" ? 'verdadeiro' : 'falso');
console.log(null ? 'verdadeiro' : 'falso');
console.log(undefined ? 'verdadeiro' : 'falso');
console.log(NaN ? 'verdadeiro' : 'falso');

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

        *true
        *{}
        *[]
        *1
        *3.23
        *"0"
        *"false"
        *-1
        *Infinity
        *-Infinity
*/
console.log(true ? 'verdadeiro' : 'falso');
console.log({} ? 'verdadeiro' : 'falso');
console.log([] ? 'verdadeiro' : 'falso');
console.log(1 ? 'verdadeiro' : 'falso');
console.log(3.23 ? 'verdadeiro' : 'falso');
console.log("0" ? 'verdadeiro' : 'falso');
console.log("false" ? 'verdadeiro' : 'falso');
console.log(-1 ? 'verdadeiro' : 'falso');
console.log(Infinity ? 'verdadeiro' : 'falso');
console.log(-Infinity ? 'verdadeiro' : 'falso');

/*
    Operator precendence
    Precedência de operador

        * grouping ()
        * negação e incremento ! ++ --
        * multiplicação e divisão * /
        * adição e subtração + - 
        * relacional < <= > >=
        * igualdade == != === !==
        * AND &&
        * OR ||
        * condicional ?:
        * assignment (atribuição) = += -= *= %=
*/
