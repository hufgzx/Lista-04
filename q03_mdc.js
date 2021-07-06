const prompt = require('prompt-sync')()

function main(){
    const num_1 = Number(prompt('Número 1: '))
    const num_2 = Number(prompt('Número 2: '))

    function mdc(num1, num2) {
        let contador = 1
        let mdc = 0
        while(num1 / contador !== 1 && num2 / contador !== 1) {
            
            if(num1 % contador === 0 && num2 % contador === 0) {
            mdc = mdc * contador
            num1 = num1 / contador
            num2 = num2 / contador
            } else {
                contador++
        }
    }
    console.log(`MDC = ${mdc}`)
}
mdc(num_1, num_2)


}
main()