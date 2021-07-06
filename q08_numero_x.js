const prompt = require('prompt-sync')()

function main(){
    let numero_x = Number(prompt('Número x: '))

    let anterior = numero_x
    let atual = Number(prompt('Número: '))
    let soma = anterior + atual

    while (!(soma = numero_x)){
        atual =  Number(prompt('Número: '))
        anterior = atual
        soma = atual + anterior
    }
    console.log(soma)

}
main()