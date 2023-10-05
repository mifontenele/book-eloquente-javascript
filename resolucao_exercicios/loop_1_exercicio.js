/* Exercício: Escreva um programa que faça sete chamadas a console.log() 
para retornar o seguinte triângulo:

#
##
###
####
#####
######
####### 

*/

let caractere = "#";
while (caractere.length <= 7) {
  console.log(caractere);
  caractere = caractere + "#";
}
