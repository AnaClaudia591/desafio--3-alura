alert('Boas vindas ao desafio Alura');
let numero = prompt("Digite um número:");
numero = parseFloat(numero); // Converte o texto para número
if (isNaN(numero)) {

    alert("Por favor, insira um número válido!");

} else if (numero > 0) {

    alert("O número é positivo.");

} else if (numero < 0) {

    alert("O número é negativo.");

} else {
    alert("O número é zero.");
}