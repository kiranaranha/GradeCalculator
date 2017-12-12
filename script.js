function calcGrade(){
    var currentGrade = 0;
    var weight = 0;
    var grade = 0;
    var addedUpWeight = 0;
    var gradeTooHigh = false;
    var gradeTooLow = false;
    for(var i = 1; i <= 4; i++) {
        weight = parseFloat(document.getElementById("weight" + i).value);
        addedUpWeight += weight;
        grade = parseFloat(document.getElementById("grade" + i).value);
        if(grade > 100 || isNaN(grade)){
            gradeTooHigh = true;
        }
        if(grade < 0){
            gradeTooLow = true
        }
        currentGrade += weight * 0.01 * grade;
    }
    if(addedUpWeight != 100){
        document.getElementById("currentGrade").innerHTML = "Please make sure % weight values are numbers and add up to 100. Enter correct data and try again!";
    }else if(gradeTooHigh) {
        document.getElementById("currentGrade").innerHTML = "Please make sure % grade values are numbers less than or equal to 100. Enter correct data and try again!";
    }else if(gradeTooLow){
        document.getElementById("currentGrade").innerHTML = "Please make sure % grade values are greater than or equal to 0. Enter correct data and try again!";
    }else{
        document.getElementById("currentGrade").innerHTML = "Your current grade is " + Math.round(currentGrade * 100) / 100 + "%";
    }
    return currentGrade;
}

function calcGradeNeeded(){
    var currentGrade = calcGrade();
    var finalWeight = parseFloat(document.getElementById("finalWeight").value);
    var desiredGrade = parseFloat(document.getElementById("desiredGrade").value);
    var gradeNeeded = 0;


    if(finalWeight > 100 || isNaN(finalWeight) || desiredGrade > 100 || isNaN(desiredGrade)) {
        document.getElementById("gradeNeeded").innerHTML = "Please make sure your data values are numbers less than or equal to 100. Enter Correct data values and try again!"
    }else if(finalWeight < 0 || desiredGrade < 0){
        document.getElementById("gradeNeeded").innerHTML = "Please make sure your data values are greater than or equal to 0. Enter Correct data values and try again!"
    }else{
        gradeNeeded = (desiredGrade - ((100 - finalWeight) * 0.01 * currentGrade)) / (finalWeight * 0.01);
        document.getElementById("gradeNeeded").innerHTML = "You need a " + Math.round(gradeNeeded * 100) / 100 + "% on the final to get a " + desiredGrade + "% in the class.";
    }
    console.log(desiredGrade);
}

function clearCurrentGrade(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("gradeNeeded").innerHTML = "";
}

function clearGradeNeeded(){
    document.getElementById("gradeNeeded").innerHTML = "";
}