//Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.

// Valor informado pelo usuário "N"
let n = parseInt(gets());

// ToDo Inclua a condição de parada adequada. 
// Dica: note que o contador "i" é incrementado de 2 em 2 (sempre indo para o próximo par).
for (let i = 2; i <= n ; i+=2) 
{
  console.log(i);
}