function setExamples(){
    var select = document.getElementById("exampleN");
    for(var i=0; i<diagExamples.length; i++){
        var el = document.createElement("option");
        el.textContent = diagExamples[i][0];
        el.value = i;
        select.appendChild(el);
    };
};