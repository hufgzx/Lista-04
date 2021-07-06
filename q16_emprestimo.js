function main(){

    let emprestimo = 3000
    
    let contador = 1
    let percentual = 0
    
    while (emprestimo !== 0){
        emprestimo = (emprestimo - 200)
        percentual = (0.85/100) * emprestimo
        contador++
    }

   
    console.log(`A quantidade dias será de ${contador}`)
}

main()