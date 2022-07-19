/*let nome =""
let idade=
console.log(typeof nome)
console.log(typeof idade)*/
// os resultados foram string e undefined pois mesmo ser valor
//as aspas mostram que a primeira variavel é uma string (sem as aspas deu erro de sintase)
//e a segunda nao tem nenhum valor atribuido então mostra undefined

let nome = prompt("qual seu nome?")
let idade = prompt ("qual sua idade?")
console.log(nome)
console.log (idade)
console.log(typeof nome)
console.log(typeof idade)
// ambos valores são do tipo string pois todo valor que retorna do prompt retorna como string
console.log ("Olá",nome, "você tem", idade, "anos")