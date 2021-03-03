// funções para repetir frases motivacionais
// declaration = declaração da função
// function statement
function createPhrases(){
    console.log('Estudar é muito bom');
    console.log('Paciência e persistência');
    console.log('Revisão é a mãe do aprendizado');
}

// executar a função tem alguns outros nomes como chamar / rodar / invocar
createPhrases();

// podemos incluir funções dentro de variáveis sendo a function expression ou functio anonymous
// parâmetros(parameters)
let total = 0;

const sum = function(number1, number2){
    let total = number1 + number2; //não é recomendável criar variável sem o let, pode dar problema no escopo global
    return total;
}

let number1 = 34;
let number2 = 25;

// sum(3,2); //(arguments)

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number1}`);
console.log(`a soma é ${sum(number1, number2)}`); //escopo local da função
console.log(total); //escopo global pegando o total

// Uma função é um liquidificador - exemplo lúdico de como uma função funciona
function makeJuice(fruit1, fruit2){
    return fruit1 + fruit2;
}

const glass = makeJuice('banana', 'apple');

console.log(glass);

// function scope
let subject = 'create video';

function createThink(subject){
    subject = 'study';
    return subject;
}

console.log(subject);
console.log(createThink(subject));

// function hoisting
// javascript altera a ordem dando a entender que a função foi criada antes de sua chamada
sayMayName();

function sayMayName(){
    console.log('Marcos');
}

// arrow function
const sayYourName = (name) =>{
    console.log(name);
}

sayYourName('Qual seu nome?');

// callback function
// callback é passar uma função de parâmetro em outra função
function teste(test){
    console.log('antes de executar a callback');
    test();
    console.log('depois de executar a callback');
}

teste(
    () => {
        console.log('ESTOU EM UMA CALLBACK');
    }
)

/*
    function() constructor
        - expressão new
        - criar um novo objeto
        - this keyword
*/
function Person(name){
    this.name = name;
    this.walk = function(){
        return this.name + " está andando";
    }
}

const marcos = new Person("Marcos");
const joao = new Person("João");
console.log(marcos.walk());
console.log(joao.walk());