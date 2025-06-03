var newLine = true;

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