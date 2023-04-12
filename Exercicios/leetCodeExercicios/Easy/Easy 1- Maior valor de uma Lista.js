let numeros = [1,192,104,28,10,902];

function EncontrarMaiorNumero(listaNumeros){
    let maiorNumero = listaNumeros[0];
    for(var i = 0;i<listaNumeros.length;i++){
        if(listaNumeros[i] > maiorNumero){ // Compara se o elemento atual do array é maior que o maior número
            maiorNumero = listaNumeros[i]
        }
        if(i === listaNumeros.length - 1){ // Compara se o indice atingiu a última posição do array
            return maiorNumero; // se for, retornará o maior número
        }
    }
}

console.log(EncontrarMaiorNumero([1,2,3,4,5]));
console.log(EncontrarMaiorNumero(numeros));