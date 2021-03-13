/*
    Sistemas de gastos familiares

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []
    
    Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/

let custsAndRevenues = {
    revenues: [2500, 3220.15, 660.55],
    custs: [300, 5500, 100.5, 55.5, 47.15,]
}

function calculateFinalBalance(){

    function calcuteRevenues(){
        let totalRevenues = 0;
        for(let i in custsAndRevenues.revenues){
            totalRevenues += custsAndRevenues.revenues[i];
        }
        return totalRevenues;
    }
    
    console.log(`A receita total da familia é de R$ ${calcuteRevenues()}`);
    
    function calculateCusts(){
        let totalCusts = 0;
        for(let i in custsAndRevenues.custs){
            totalCusts += custsAndRevenues.custs[i];
        }
        return totalCusts;
    }
    
    console.log(`Os custos totais da familia é de R$ ${calculateCusts()}`);

    return Math.ceil(calcuteRevenues() - calculateCusts());
}

console.log(`O saldo total restando da familia é de R$ ${calculateFinalBalance()}`);