//Funções e variáveis

//função 1
function escreva(frase){
    document.write(frase);
}
// função 2
function soma(n1,n2) {
    return n1 + n2;
}
//função 3 - essa foi um exemplo da aula de DOM
function clicar(){
    document.getElementById("agradecimento").innerHTML = "Agora clique nesse texto";
    // alert("Obrigado por ter clicado");
}

//função 4
function redirecionar() {
    window.open("https://www.linkedin.com/in/allanacaldas") // Caso queira abrir em outra aba
   /* window.location.href = "https://www.linkedin.com/in/allanacaldas"; // Caso queira abrir na mesma página*/
}

//função 5
function trocar() {
    document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
}

//função 6
function voltar () {
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui";
}

//função 7
fuction carregar() {
    alert("Página carregada")
}


alert(soma(5,2));

let idade = prompt("Qual é a sua idade?");
alert("Você tem " + idade+ " anos");
escreva('Você está velho demais');

let nome = "Gabriel Galeani";
escreva("<br>"+ "Seu nome é " + nome);

nome = "Andreani Souza";
escreva ("<br>"+ "Seu nome é " + nome + "<br>");
console.log(nome.replace("Andreani", "Lyubosha"));
console.log(nome.toUpperCase()); //Pode ser lowercase também

//Arrays

var lista = ["maçã ", " pêra", " uva", " acerola", " abacaxi", " kiwi", " limão", " banana"];
document.write(lista[5] + "<br>"); //pra mostrar a fruta que ocupa a posição 5
lista.push(" caju");
document.write(lista + "<br>");
lista.pop(); //pra remover da lista o item adicionado
document.write(lista[4] + "<br>");
document.write(lista.length + "<br>");
console.log(lista.toString()[2]);
console.log(lista.join(" - "));


//Dicionário

var fruta = {nome:"melancia", cor: "vermelha", tamanho: "grande"};
console.log(fruta.tamanho);

//Podemos ainda fazer um array de dicionário

var fruta = [{nome:"uva", cor:"roxo", tamanho:"pequena"}, {nome:"melancia", cor:"vermelha", tamanho:"grande"}];
console.log(fruta[1].cor);

//Condicionais, laços de repetição e Date

 idade = prompt("Digite novamente a sua idade"); //O prompt é ideal pra entrada de dados!

if (idade>=18){
    alert(" Você é maior de idade");
}
else{
    alert("menor de idade");
}

//Estrutura de repetição

var count = 0;
while (count <= 5){ //while
    document.write("<br>" + count);
    count++;
}

var countA;
for (countA = 0; countA <= 5; countA++){
    console.log(countA);
} //for


//Trabalhando com datas no Javascript

var d = new Date();
document.write("<br>" + d);
document.write("<br>" + d.getMinutes());
document.write("<br>" + d.getHours() + "<br><hr>");

//Manipulando elementos da página
