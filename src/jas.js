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