const require = ('prompt-sync');

function main(){

    let pop_a = 200000
    let pop_b = 800000
    let anos = 0

    while(pop_a < pop_b){
        
        pop_a = pop_a + (pop_a * 0.35)
        pop_b = pop_b + (pop_b * 0.135)
        anos++
    }
    console.log("Levará",anos,"anos para a população da cidade A superar a população de B")
}
main()