displayNumber = 0; // Temporary Number
equationType = 0; // +, -, *, /
totalNumber = 0; // Saves answer until = is pressed

//1 = addition
//2 = subtraction
//3 = multiplication
//4 = division

    // console.log("totalNumber = "+ totalNumber + " Addition was clicked");
    // console.log("displayNumber = "+ displayNumber + " Addition was clicked");

function numberClicked(inputNumber){
    console.log(inputNumber + " Number was clicked");
    displayNumber = displayNumber + inputNumber + "";
    document.getElementById("display").innerHTML = displayNumber;
}   

function clearClicked(){
    displayNumber = 0;
    equationType = 0;
    totalNumber = 0;
    document.getElementById("display").innerHTML = 0;
}   


function equationClicked(equationTypeInputted, symbol){// 1  //2  // 3  // 4
    equationType = equationTypeInputted;
    totalNumber = parseInt(displayNumber);
    displayNumber = 0;
    document.getElementById("display").innerHTML = symbol;
}

function equalsClicked(){
    
    if(equationType == 1){ //addition
        totalNumber = totalNumber + parseInt(displayNumber);
    }

    if(equationType == 2){ // subtraction
        totalNumber = totalNumber - parseInt(displayNumber);
    }

    if(equationType == 3){ // multiplication
        totalNumber = totalNumber * parseInt(displayNumber);
    }

    if(equationType == 4){ // division
        totalNumber = totalNumber / parseInt(displayNumber);
    }

    equationType = 0;
    displayNumber = totalNumber;
    document.getElementById("display").innerHTML = totalNumber;

}