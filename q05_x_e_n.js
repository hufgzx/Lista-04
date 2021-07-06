const prompt = require('prompt-sync')()

function main(){
    const num_x = Number(prompt('Informe o primero número: '))
    const num_n = Number(prompt('Informe o segundo número: '))

    let resultado = num_x / num_n
    let anterior = num_x
    
    while(anterior = resultado){
        num_x++
        num_n+= num_x;
        console.log(num_x)

    }



}
main()