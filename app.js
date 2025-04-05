let input = "Ya Doli con el padre han encontrado a su querido hijo";
const lengthInput = input.length;
let matriz = input.toString();


const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < lengthInput; i++) {
    console.log(i);
    for(let i = 0; i < vowels.length; i++){
        console.log(i);
        if (matriz[position] == vowels[i]) {
            resultArray.push(matriz[position]);
            if (matriz[position] == "u" || matriz[position] == "e") {
                resultArray.push(matriz[position]);
            }

        }else {
            console.log("No coincide");
        }
    }
}

console.log(resultArray);
let resultArrayMayusculas = resultArray.map(letra => letra.toUpperCase());
console.log(resultArrayMayusculas);
const resultado = resultArrayMayusculas.join("");
console.log(resultado);

