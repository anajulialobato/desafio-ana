function calculatorRankeadas(numW, numL){
    let winLosses = (numW - numL)
    return winLosses
}
let levelHero = calculatorRankeadas(45, 11)
let nivel = ""
    

    if (levelHero <= 10){
        nivel = "ferro"
    }else if (levelHero>11 && levelHero<=20){
        nivel = "bronze"
    }else if (levelHero>21 && levelHero<=50){
        nivel = "prata"
    }else if (levelHero>81 && levelHero<=90){
        nivel = "ouro"
    }else if (levelHero>91 && levelHero<=100){
        nivel = "lendário"
    }else{
        nivel = "imortal"
    }
console.log("O herói tem saldo de " + levelHero + " está no nível de " + nivel)