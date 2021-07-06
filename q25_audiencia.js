const prompt = require('prompt-sync')();

function main(){
    let canal2 = 0
    let canal4 = 0
    let canal5 = 0
    let canal7 = 0
    let canal10 = 0
    console.log('Responda "0" para o fim da pesquisa.')
    while(ask != 0){
        let ask = Number(prompt("Qual o seu canal mais assistido?: "))
        if(ask == 2){
            canal2++
            console.log("Voto computado! Próximo!")
        }else if(ask == 4){
            canal4++
            console.log("Voto computado! Próximo!")
        }else if(ask == 5){
            canal5++
            console.log("Voto computado! Próximo!")
        }else if(ask == 7){
            canal7++
            console.log("Voto computado! Próximo!")
        }else if(ask == 10){
            canal10++
            console.log("Voto computado! Próximo!")
        }else if(ask == 0){
            console.log("Fim da pesquisa!")
        }else{
            console.log("Opção inválida!")
            console.log("Voto não computado! Tente novamente!")
        }
        
    }
    console.log("Votos para o canal 2:",canal2,"\nVotos para o canal 4:",canal4,"\nVotos para o canal 5:",canal5,"\nVotos para o canal 7:",canal7,"\nVotos para o canal 10:",canal10)
}
main()