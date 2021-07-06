const prompt = require('prompt-sync')()

function main(){
    let matricula = (prompt('Matricula: '))
    let nota_1 = Number(prompt('Nota 1: '))
    let nota_2 = Number(prompt('Nota 2: '))
    let nota_3 = Number(prompt('Nota 3: '))

    let aprovado = 0
    let reprovado = 0

    while (!(matricula = 0) ){

        console.log("### Matrícula",matricula,"###")
        
    }
    const media_final = (2 * nota_1) + (3 * nota_2) + (5 * nota_3)
    if (media_final >= 7){
        aprovado++
        console.log('Aprovado')

    } else {
        reprovado++
        console.log('Reprovado')
    }

}
main()