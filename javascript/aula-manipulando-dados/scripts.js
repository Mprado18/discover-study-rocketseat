// javascript é uma linguagem baseada em protótipos
// a maioria dos tipos de dados ni js poderão herdar uma cadeia de propriedades de um prototype

// para acessar o proto de número inteiro devemos colocar exemplo: 23.0.__proto__

// type conversion (typecasting) altera um tipo de dado para outro já o type coersion é o js realizando está troca 

console.log('9' + 5); // js transformou o number 5 em string para evitar problemas com coersion
console.log(Number('9') + 5); // nós estamos realizando está conversão de um tipo de dado para outro

// Manipulando Strings e Numbers
let string = '123';
console.log(Number(string)); // string to number

let number = 321;
console.log(String(number)); // number to string

// Contando caracteres em palavra e dígitos em número
let word = "Paralelepipedo";
console.log(word.length);

let number2 = 1234;
console.log(String(number2).length); // .lenght não funciona direto em number, necessitando converter para string

// Transformar número quebrado com 2 casas decimais e trocar ponto por vírgula
let number3 = 489.49846635;
console.log(number3.toFixed(2).replace('.', ',')); //podemos utilizar mais de um método em um dado

// Transformando letras minúsculas em maiscúlas e ao contrário
let word1 = "Programar é muito bacana";
console.log(word1.toUpperCase());
console.log(word1.toLowerCase());

// Verificar se texto contém uma palavra especifica
let phrase = "Eu amo jogar no console";
console.log(phrase.includes("PC")); //retorna false como não tem PC na frase, devemos nos atentar que a palavra verificada deve ser identifica a que consta na frase para retornar true

// Separando textos que contém espaço e armazenando em Array, após isso usando o Array para transformar em texto com separação de -
let text = "Eu-quero-aprender-a-programar-em-muitas-linguagens";
console.log(text);
let myArray = text.split("-");
console.log(myArray);

let ajustedText = myArray.join(" ");
console.log(ajustedText);

// Criando array com constructor
let array1 = ['a', 'b', 'c']; //normal
console.log(array1);

let array2 = new Array(5); //com constructor, criou um array vazio com 5 posições
console.log(array2);

// Contar elementos de um array
console.log([
    'a', 'b', 'c'].length); //contando todos os elementos do array, podendo ter objeto e funções também

console.log([
    'a', 
    {type: 'retornando objeto'}, 
    function(){return 'retornando function'},
][1].type); //estamos acessado posição 1 e objeto do array

console.log([
    'a', 
    {type: 'retornando objeto'}, 
    function(){return 'retornando function'},
][2]()); //estamos acessado posição 2 e function do array

// Transformar uma cadeia de caracteres em elementos de um array
let word2 = "manipulação";
console.log(Array.from(word2));

// Manipulando um Array
let techs = ['html', 'css', 'javascript'];

// Adicionar item no final do array
techs.push('react.js');
console.log(techs);

// Adicionar item no começo do array
techs.unshift('jquery');
console.log(techs);

// Remover item do fim do array
techs.pop();
console.log(techs);

// Remover item do começo do array
techs.shift();
console.log(techs);

// Pegar apenas alguns elementos do array
console.log(techs.slice(2,3));

// Remover um ou mais itens em qualquer posição do array
techs.splice(0,1);
console.log(techs);

// Encontrar posição de um elemento no array
let words = ['a', 'b', 'c', 'd', 'f'];
let index = words.indexOf('c');

console.log(index);