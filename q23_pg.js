const prompt = require('prompt-sync')()

function main(){

    const razao = Number(prompt('Insira a razão da PG: '))
    let primeirot = Number(prompt('Insira o primereiro número da PG: '))
    let ntermos = Number(prompt('Insira a quantidade de termos da PG: '))

    let termo
    let contador = 0
    
    while(!(ntermos === contador)){
        primeirot = primeirot * razao
        termo = primeirot
        console.log(termo)
        contador++
    }

    
    console.log('Esses são os termos da PG')
}

main()