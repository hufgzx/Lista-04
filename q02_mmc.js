const prompt = require('prompt-sync')()

function main(){
    let num_a = Number(prompt('Número a: '))
    let num_b = Number(prompt('Número b: '))

    function mmc(x, y) {
        let resto;
        while(resto !== 0) {
            resto = x % y;
            x = y;
            y = resto;
        }
        return x;
    }
    let divisor = mmc(num_a, num_b)
    console.log((num_a * num_b)/ divisor)


}
main()