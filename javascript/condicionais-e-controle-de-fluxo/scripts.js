// Control flow

// se copo está sujo
console.log('lavar o copo');

// se copo não estiver sujo
console.log('servir o café');

// IF...ELSE
/*
caso tenhamos apenas uma linha de condição podemos usar o retorno  do IF, ELSE e ELSE IF fora do bloco {}, mas não é recomendável, podendo dar algum erro
*/
// se colocarmos condição truthy ou falsy, as demais condições nem serão consideradas, independente do valor

let temperature = 37;

if(temperature >= 37.5){
    console.log('Está com febre alta');
} else if(temperature < 37.5 && temperature >= 37){
    console.log('Está com febre moderada');
} else{
    console.log('Não está com febre');
}

// SWITCH
/*
switch(expression){
    case 'a':
        //código
        break;
    case 'b':
        //código para expression b
        break;
    default:
        break;
}
*/

function calculte(number1, operator, number2){
    let result;

    switch(operator){
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log('Não implementado');
            break;
    }

    return result;
}

console.log(calculte(4, '+', 2));
console.log(calculte(10, '-', 5));
console.log(calculte(15, '*', 2));
console.log(calculte(20, '/', 2));
console.log(calculte(2, '%', 1));

// THROW
function sayMyName(name = ''){
    if(name === ''){
        throw new Error('Nome é obrigatório');
    }

    console.log('Depois do erro');
}

// TRY...CATCH
try{
    sayMyName();
} catch(e){
    console.log(e);
}

console.log('Após a função de erro');