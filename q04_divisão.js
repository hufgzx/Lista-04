const prompt = require('prompt-sync')()

function main(){
    const num = Number(prompt('Valor do número: '))

    let resultado = num / 2
    let contador = 1

    while (resultado > 1){
        resultado = resultado / 2
        contador++

        if (resultado < 1){
            console.log(divisao)
        }
        
    }
    console.log('Último resultado: ', resultado)
    console.log('Quantidade de divisões: ', contador)

}
main()