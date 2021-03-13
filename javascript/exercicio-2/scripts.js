/*
    Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C
    
        * de 90 para cima - A
        * entre 80 a 89 - B
        * entre 70 a 79 - C
        * entre 60 a 69 - D
        * menor que 60 - F
*/

function getAndConvertGrade(grade){
    let finalGrade;
    if(grade >= 90 && grade <= 100){
        finalGrade = "A";
        console.log(`Parabéns sua nota final foi ${finalGrade}!`);
    } else if(grade >= 80 && grade <= 89){
        finalGrade = "B";
        console.log(`Muito bem, sua nota final foi ${finalGrade}!`);
    } else if(grade >= 70 && grade <= 79){
        finalGrade = "C";
        console.log(`Bom, sua nota final foi ${finalGrade}!`);
    } else if(grade >= 60 && grade <= 69){
        finalGrade = "D";
        console.log(`Sua nota final foi ${finalGrade}, precisa estudar mais!`);
    } else if(grade < 60 && grade >=0){
        finalGrade = "F";
        console.log(`Sua nota final foi ${finalGrade}, infelizmente não foi aprovado na matéria!`);
    } else{
        console.log('Nota inválida, por favor insira uma nota correta!');
    }
}

getAndConvertGrade(97);
getAndConvertGrade(88);
getAndConvertGrade(76);
getAndConvertGrade(65);
getAndConvertGrade(49);
getAndConvertGrade(101);
getAndConvertGrade(-15);