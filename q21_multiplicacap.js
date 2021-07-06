const prompt = require('prompt-sync')()

function main(){
    let A = Number(prompt('valor do primeiro número: '))
    let B = Number(prompt('valor do segundo número: '))
    let n_vezes = B
    let A2 = A

    while(n_vezes != 1){
        A = A2 + A
        n_vezes--
    }
    console.log("Resultado:", A)
}
main()