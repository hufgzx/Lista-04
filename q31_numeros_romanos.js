const prompt = require('prompt-sync')();

function main(){
    let num = Number(prompt("Qual número você deseja transformar em romano?(Máximo 3 dígitos): "))

    let unidades = num%10;
    let dezenas = ((num-num%10)%100)/10;
    let centenas = centenas = (num-num%100)/100;

    let i = 0
    let r = ""

    let unidades_res = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    let dezenas_res = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    let centenas_res = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']

    while(i<=unidades) {
        if (i==unidades) {
            r = unidades_res[i] + r;
        }
        i++;
    }
    i = 0;

    while(i<=dezenas) {
        if (i==dezenas) {
            r = dezenas_res[i] + r;
        }
        i++;
    }
    i = 0;

    while(i<=centenas) {
        if (i==centenas) {
            r = centenas_res[i] + r;
        }
        i++;
    }

    console.log("Seu número em Romano é:",r);
}

main()