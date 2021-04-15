/*

*/


function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;

}

var idade = prompt ("Qual é sua idade?:");
validaIdade(idade)
console.log(validar);

/*
function soma (n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert (soma (5, 10));
alert(setReplace("Vai Japão", "Japão" , "Brasil"));


*/



/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());

*/

/*
var count_for;
for (count = 0; count <=5; count++){
    alert(count);
}

var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
}
*/


/*
var idade = prompt("Qual é a sua idade?");
if(idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade");
}

*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

*/


/*
var nome = "Pedro Henrique Abreu"
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.toLowerCase());
//console.log(frase.replace("Japão" , "Brasil"));

*/