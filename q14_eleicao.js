const prompt = require('prompt-sync')();

function main(){
    
    let serra = 0;
    let dilma = 0;
    let ciro = 0;
    let indeciso = 0;
    let outros = 0;
    let nulo = 0;
    let total = 0;
    while(voto != -1){
        console.log('O entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então responder: indeciso=99, outros=98, nulo/branco=0, e caso queira encerrar a entrevista, digitar "-1" ')
        let voto = prompt("Qual será seu voto?: ")
        if(voto == 45){
            serra ++
        }else if(voto == 13){
            dilma ++
        }else if(voto == 23){
            ciro ++
        }else if(voto == 99){
            indeciso ++
        }else if(voto == 98){
            outros ++
        }else if(voto == 0){
            nulo ++
        }else if(voto == -1){
            console.log("Votação encerrada!")
        }else{
            console.log("Opção inválida!")
        }
    
        let prctg_serra = (100 * serra)/total
        let prctg_dilma = (100 * dilma)/total
        let prctg_ciro = (100 * ciro)/total
        let prctg_indeciso = (100 * indeciso)/total
        let prctg_outros = (100 * outros)/total
        let prctg_nulo = (100 * nulo)/total
        total ++
    }

    console.log("Candidato Serra:", prctg_serra,"%\nCandidato Dilma:" ,prctg_dilma,"%\nCandidato Ciro:",prctg_ciro,"%\nOutros candidatos:",prctg_outros,"%\nPorcentagem de indecisos:",prctg_indeciso,"%\nPorcentagem nulo:",prctg_nulo,"%\nTotal de entrevistados:",total)
    if((serra/total*100)>50 || (dilma/total*100)>50|| (ciro/total*100)>50) {
        console.log('Não ocorrerá segundo turno!');
    }else{
        console.log('Ocorrerá segundo turno!')
    }
}
main();