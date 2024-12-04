var input = document.getElementById('display');
var history = document.getElementById('history');
var operador = "";
var num1 = 0;
var num2 = 0;




function add_numero(num){
    vAtual = document.getElementById('display').value;
    input.value = vAtual + num;

   history.innerHTML = input.value;
}

function add_operador(op){
    operador = op;
    num1 = parseInt(input.value);
    input.value = "";
    
}

function total(){
    num2 = parseInt(input.value);

    switch(operador){
        case "+":
            input.value = num1 + num2;
            window.alert(input.value);
            break;
        case "-":
            input.value = num1 - num2;
            break;
        case "*":
            input.value = num1 * num2;
            break;
        case "/":
            if( num2 === 0){
                window.alert("Divisão por zero não é permitido";)
                input.value = "";
            }else{
                input.value = num1 / num2;
            }
            break;
        default:
            window.alert("operação inválida.");
    }
    
}