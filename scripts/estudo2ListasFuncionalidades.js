//Parte 2, interações diretas com o HTML E CSS


var lista = [
    "Feijão",
    "Arroz",
    "Maçã",
    "Abóbora",
    "Vinagre",
    "Água"
]

//Utilizando do html em JS
document.write("<h5 align='center'>github.com/lucaspessoli</h5>")
document.write("<h2 align='center'> Produtos: </h2>")
lista.forEach(function(item){
    document.write("<li align='center'>" + item);
});

//Utilizando do CSS em JS
//Definir o elemento pra ser alterado, para alterar as informações de um dos elementos do CSS basta usar o comando:
//document.getElementById('NOMEDOELEMENTO'), você também pode setar em uma variavel CONST o valor para que facilite a manipulação do CSS
const elemento = document.getElementById('title'); // definindo o elemento na variavel elemento
elemento.style.fontFamily = 'Georgia'; // definindo a fonte para "georgia usando o back-end"
elemento.style.textAlign = 'center'; // Definindo o texto pra aparecer no centro da tela.
//ou você pode utilizar diretamente caso você queira fazer uma alteração pequena em um elemento especifico
document.getElementById('meuElemento2').style.fontStyle = "italic";//Mudando o estilo da fonte para itálico!






