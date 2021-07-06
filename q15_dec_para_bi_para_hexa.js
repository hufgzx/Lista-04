const prompt = require('prompt-sync')();

function main(){
    
    let num_dec = Number(prompt("Qual o número que será convertido?: "))
    
    let num_bin = num_dec.toString(2)
    let num_hex = num_dec.toString(16)

    
    if(num_dec < 0 || num_dec > 255 ){
        console.log("O número inserido é inválido!")
    }else{
        console.log("O número",num_dec,"em decimal ficará: \n",num_bin,"em binário\n",num_hex,"em hexadecimal.")
    }
}
main()