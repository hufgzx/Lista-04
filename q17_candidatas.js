const prompt = require('prompt-sync')();

function main(){
    
    console.log('Quando desejar encerrar os cadastros, escreva "Fim"')
    
    let mais_alta = 0;
    let mais_alta_nome = 0;
    let mais_baixa = 1000;
    let mais_baixa_nome = 0;
    let mais_magra = 1000;
    let mais_magra_nome = 0;
    let mais_gorda = 0;
    let mais_gorda_nome = 0;

    while(nome != "Fim"){
        console.log(" Próxima Candidata ")
        let nome = prompt("Qual o nome da candidata?: ")
        let peso = Number(prompt("Qual o peso da candidata?(Kg): "))
        let altura = Number(prompt("Qual a altura da candidata?(Cm): "))
    
        if(peso > mais_gorda){
            mais_gorda = peso
            mais_gorda_nome = nome
        } else if (peso < mais_magra){
            mais_magra = peso
            mais_magra_nome = nome
        } else if(altura > mais_alta){
            mais_alta = altura
            mais_alta_nome = nome
        } else if(altura < mais_baixa){
            mais_baixa = altura
            mais_baixa_nome = nome
        }    
    }
    
    console.log("A candidata mais alta é a: ",mais_alta_nome,"com",mais_alta,"Cms\nA candidata mais baixa é a:",mais_baixa_nome,"com",mais_baixa,"Cms\nA candidata mais gorda é a:",mais_gorda_nome,"com",mais_gorda,"Kgs\nA candidata mais magra é a:",mais_magra_nome,"com",mais_magra,"Kgs")
}
main()