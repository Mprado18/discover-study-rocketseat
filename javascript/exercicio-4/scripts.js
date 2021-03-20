/*
    Crie uma função que recebe uma string em celsius ou fahrenheit e faça a conversão de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function transformDegree(value){
    const celsius = value.toUpperCase().includes('C');
    const fahrenheit = value.toUpperCase().includes('F');
    
    //fluxo de erro
    if(!celsius && !fahrenheit){
        throw new Error('Grau não identificado');
    }

    // fluxo de conversão fahrenheit para celsius
    let updatedDegree = Number(value.toUpperCase().replace('F', ''));
    let convert = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

    //fluxo alternativo conversão celsius para fahrenheit
    if(celsius){
        updatedDegree = Number(value.toUpperCase().replace('C', ''));
        convert = (celsius) => celsius * 9/5 + 32;
        degreeSign = 'F';
    }

    return convert(updatedDegree) + degreeSign;
}

try{
    console.log(transformDegree('50F'));
    console.log(transformDegree('10C'));
    // transformDegree('10A'); //teste de erro
} catch(error){
    console.log(error);
}

/* OBS: caso seja colocado um valor com mais de uma letra, teremos retorno de NaN, para corrigir na validação podemos aplicar uma expressão regular para remover as demais letras e padronizar a entrada de valor */