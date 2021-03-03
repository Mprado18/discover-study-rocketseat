// 1. Declare uma variável de nome wight 
let weight;

// 2. Que tipo de dado é a variável acima? 
console.log(typeof weight); //undefined

/*
3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String;
    * age: Number (integer);
    * stars: Number (float);
    * isSubscribed: Boolean;
*/
let name = "Marcos";
let age = 25;
let stars = 4.5;
let isSubscribed = true;

/*
4. A variável student abaixo é de que tipo de dados? //tipo objeto

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kgs.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/
const student = {
    name: "Marcos",
    age: 25,
    weight: 78
}

console.log(typeof student); //object

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kgs.`);

/* 
5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/
let students = [];

/*
6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).
*/
students = [student];
console.log(students);

/*
7. Coloque no console o valor da posição zero do Array acima.
*/
console.log(students[0].name);

/*
8. Crie um novo student e coloque na posição 1 do Array students
*/
const angie = {
    name: "Angie",
    age: 26,
    weight: 56
}

students[1] = angie;

console.log(students);

/*
9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou:

    console.log(a);
    var a = 1
*/

// No console irá aparecer como undefined devido estarmos tentando acessar o valor de var antes da sua declaração, porém devido ao hoisting do JS, no final teremos a declaração da variável a como 1 e poderemos utiliza-la devido ao var trabalhar em escopo global.

console.log(a);
var a = 1;

/*
10. Caso seja alterado de var para let o que irá acontecer?
*/

// Irá gerar um erro de referência devido o let ainda não ter sido criado no momento que foi chamado.
/*
console.log(a);
let a = 1; //Uncaught SyntaxError: Identifier 'a' has already been declared
*/