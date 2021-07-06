const prompt = require('prompt-sync')();

function main(){


    var num = String(prompt("Informe qual o número: "));


    var tamanho = num.length


    console.log("O número possui",tamanho,"dígitos.")
}
main()