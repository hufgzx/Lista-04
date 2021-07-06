const prompt = require('prompt-sync')()

function main(){
    
    let mais_pesado = 0
    let mais_pesado_n = 0
    let mais_leve = 100000
    let mais_leve_n = 0
    console.log('Para parar o processo, digite "0" ')

    while(n_ident != "0"){
        let n_ident = Number(prompt("Qual o número de identificação do boi?: "))
        let peso = Number(prompt("Qual o peso do boi?(KGs): "))

        if(peso < mais_leve){
            mais_leve = peso
            mais_leve_n = n_ident
        } else if (peso > mais_pesado){
            mais_pesado = peso
            mais_pesado_n = n_ident
        }
    }
    console.log("O boi mais leve é o boi com o N°:",mais_leve_n,", com o peso de",mais_leve,"KGs\nO boi mais pesado é o boi com o N°:",mais_pesado_n,", com o peso de",mais_pesado,"KGs.")
}
main()