function calcGrade(){
    var currentGrade = 0;
    var weight = 0;
    var grade = 0;
    for(var i = 1; i <= 4; i++) {
        weight = parseInt(document.getElementById("weight" + i).value);
        grade = parseInt(document.getElementById("grade" + i).value);
        currentGrade += weight * 0.01 * grade;
    }
    document.getElementById("currentGrade").innerHTML = currentGrade;
}

function calcFinal(){
    var currentGrade = document.getElementById("currentGrade").value;
}
