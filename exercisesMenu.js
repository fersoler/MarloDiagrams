function setExercises(){
    var select = document.getElementById("exerN");
    for(var i=0; i<diagExercises.length; i++){
        var el = document.createElement("option");
        el.textContent = diagExercises[i][0];
        el.value = i;
        select.appendChild(el);
    };
};