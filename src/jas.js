var newLine = true;
var value1;
var currentOperator;

function digitBtn(button){
    if(newLine){
        document.getElementById("inputBox").value = button;
        newLine = false;
    }
    else{
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value= currentValue + button;
    }
}

function acBtn(){
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

function operatorBtn(operator){
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
}

function equalsBtn(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch (currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;
    
        case "-":
            finalTotal = value1 - value2;
            break;

        case "/":
            finalTotal = value1 / value2;
            break;

        case "x": 
            finalTotal = value1 * value2;
            break;
    }
    document.getElementById("inputBox").value = finalTotal;
    value1 = 0;
    newLine = true;
}