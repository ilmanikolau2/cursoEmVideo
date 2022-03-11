let num = [5,8,9,6,3,7]
num.sort()

//Percurso para exibição de vetores  *percurso tradicional*
// for(let pos=0; pos < num.length; pos++) {
//     console.log(`A possição pos tem o valor ${num[pos]}`)
// }

for(let pos in num) { // Novo percurso mais simplificado 
    console.log(`Mostrando ${num[pos]}`)
}
console.log(num.indexOf(0));// .indexOf(?) procura a posição do ? dentro do vetor se retornar -1 é pq não tem o valor procurado dentro de vetor



