let pegarString = prompt("Digite uma palavra: ");

let numCarct = pegarString.length;
console.log("Número de caracteres: ", numCarct);

let maiuscula = pegarString.toUpperCase();
console.log("Em maiúsculo:", maiuscula);

let vogais = (pegarString.match(/[aeiouAEIOU]/g) || []).length;
console.log("Número de vogais:", vogais);

let comecaUNI =  pegarString.toUpperCase().startsWith("UNI");
console.log("d) Começa com 'UNI':", comecaUNI); 