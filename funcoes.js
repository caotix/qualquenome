var numsort = []
var numdig = []
function sorteioNum(){
    numsort = []
    do{

    
    let sort = Math.ceil (Math.random()*60)
    if(!numsort.includes(sort))
    numsort.push(sort)
    
    }while(numsort.length<6);

    document.getElementById("numsort").innerHTML = numsort
}

function getNum(valor,pos){
    if(valor>60){
        alert("o valor é maior que 60")
        limpar(pos)
    }else if(valor <= 0){
    alert("o valor não pode ser menor que 0")
    limpar(pos)
    }else if(numdig.includes(valor)){
      alert("o Valor ja foi digitado")
      limpar(pos)
    }else{
        numdig[pos]=valor
    }
}

function verificaacertos(){
    let cont = 0
    numdig.forEach((valor, index) => {
            if (numsort.includes(valor)) {
                cont = cont + 1;
            }
        })
    document.getElementById("total").innerText = cont
}

function limpar(pos){
    document.getElementById(`num${pos}`).value = ""
}