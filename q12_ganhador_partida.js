const prompt = require('prompt-sync')({
sigint: true
})

function main(){
    let pontos_jogador1 = 0
    let pontos_jogador2 = 0

    while(pode_continuar(pontos_jogador1 < 21 && pontos_jogador2 < 21 && Math.abs(pontos_jogador2 - pontos_jogador1))){
        let jogador = Number(prompt('ponto: '))
        if (jogador = 1){
            pontos_jogador1++
        } else{
            pontos_jogador2++
        }

    }
    let vencedor = 'jogador'
    if (pontos_jogador1 > pontos_jogador2){
        vencedor = vencedor + '01'
    } else {
        vencedor = vencedor + '02'
    }
    console.log('Vencedor: ', vencedor)

}
function pode_continuar(pts1, pts2){
    const alvo = 0
    const diff = Math.abs(pts2 - pts1)
    
    if (pts1 < alvo && pts2 < alvo){
        return true
    } else if (diff < 2){
        return true
    } else {
        return false
    }

}
main()