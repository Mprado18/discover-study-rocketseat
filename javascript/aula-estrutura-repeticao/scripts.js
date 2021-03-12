// Estrutura de repetição for
// for (para)
// break - parar a execução da condição
// continue - pular a execução da condição

for(let i = 0; i <= 10; i++){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    console.log(i);
}

for(let i = 20; i > 0; i--){
    if(i === 15){
        break; //irá parar a aplicação quando atingir a condição do if
    }
    console.log(i);
}

// while (enquanto)
let i = 1750;

while(i > 10){
    i /= 5;
    console.log(i);
}

/* while é recomendado para quando não sabemos qual o momento da parada, então definimos e a função executa até parar automaticamente. */

// for of
// cria um loop em cima de uma string ou array
// for of nos permite pegar cada caractere de uma string ou cada item de um array de forma separada
let name = 'Marcos';
let names = ['Prado', 'Angie', 'Winky'];

for(let char of name){
    console.log(char);
}

for(let name of names){
    console.log(name);
}

// for in
// irá criar um loop em cima de um objeto
let person = {
    name: 'Marcos',
    age: 25,
    weight: 75
}

for(let property in person){
    console.log(property);
    console.log(person[property]);
}