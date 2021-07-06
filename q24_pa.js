const prompt = require('prompt-sync')()

function main(){

    const razao = Number(prompt('Insira a razão da PA: '))
    let primeirot = Number(prompt('Insira o primeiro termo da PA: '))
    let ntermos = Number(prompt('Insira a quantidade de termos da PA: '))


    let termo
    let contador = 0

    while (!(ntermos === contador)){
        primeirot = primeirot + razao
        termo = primeirot
        console.log(termo)
        contador++
    }
console.log('Esses são os termos da PA')
}

main()