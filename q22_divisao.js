const prompt = require('prompt-sync')()

function main(){

    let num1 = Number(prompt('Primeiro número: '))
    let num2 = Number(prompt('Segundo número: '))

    let quociente = 0
    let resto = 0
    let contador = 0

    while(!(num1 === 0)){
        contador++
        
        if(num1 >= num2){
            num1 = num1 - num2
            quociente++
            resto = num1
        }else{
            num1 = 0
        }
    }

    
    console.log(`O quociente é igual a ${quociente}, e o resto é ${resto}`)
}

main()