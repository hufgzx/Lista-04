const prompt = require('prompt-sync')()

function main(){
    var numero = Number(prompt('Número: '))
    var lista = numero + 1

    while (!(lista = numero)){
        numero++
    }

console.log("Ultimo numero é igual ao primeiro")


}
main()