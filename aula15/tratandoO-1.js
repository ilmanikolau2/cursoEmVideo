let num = [5,8,9,6,3,7]
num.sort()

//Para tratar do -1 com a frase que se encaixe melhor ao contexto faremos uma condição if
let pos = num.indexOf(8)

if(pos == -1){
    console.log(`Este valor nao existe dentro do vetor ${num}`)
}else{
    console.log(`O valor esta na posição ${pos}`)
}