/*

Implementación de Diagramas de Marlo
Fernando Soler-Toscano - fsoler@us.es
(C) Licencia MIT


TODO
- En la inferencia, cuando una región es a, otra ¬a y hay una vacía, se elimina la vacía. 
- Orden de menú: creación, conversión, transformación, inferencia, extracción. 

*/


// Global variables
var currentDiags = [];
var exerciseNumber = -1;     // To globally set the exercise number
var doingExercise = false;   // To detect when the user is solving an exercise and chech the solution

const initx = 110;  // 100
const inity = 80;
var px = initx;
var py = inity;

function testMain() {
    //str1 = document.getElementById("holder").innerHTML;
    //document.getElementById("holder").innerHTML = str1+
    //diag_text_view(diag1);
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    if(doingExercise && diagExercises[exerciseNumber][1] != "creation"){

        document.getElementById("erricsubj").innerHTML = "Creation of new diagrams is not allowed in the current exercise. Work with existing diagrams by using the other operations.";
        return;
    }

    // Lowercase and trim subject and predicate:
    inputSubj = document.getElementById("icsubj").value.toLowerCase().trim();
    inputPred = document.getElementById("icpred").value.toLowerCase().trim();

    // Read the propositions: 
    readSubj = readProp(inputSubj);
    readPred = readProp(inputPred);

    if (readSubj[0] == true && readPred[0] == true) {
        var diag;
        subj = readSubj[1];
        pred = readPred[1];
        // Set the lowercase input:
        document.getElementById("icsubj").value = subj;
        document.getElementById("icpred").value = pred;
        switch (document.getElementById("ictype").value) {
            case "all-all":
                diag = new_diagram_All_All(subj, pred);
                break;
            case "all-some":
                diag = new_diagram_All_Some(subj, pred);
                break;
            case "some-all":
                diag = new_diagram_Some_All(subj, pred);
                break;
            case "some-some":
                diag = new_diagram_Some_Some(subj, pred);
                break;
        }

        // Añade el nuevo diagrama a la lista total de diagramas
        addDiagram(diag, "new", "");

        // Borra el formulario 
        //document.getElementById("icsubj").value = "";
        //document.getElementById("icpred").value = "";

    } else {
        if (readSubj[0] == false) {
            document.getElementById("erricsubj").innerHTML = `Error in the subject: ${readSubj[1]}`;
        };
        if (readPred[0] == false) {
            document.getElementById("erricpred").innerHTML = `Error in the predicate: ${readPred[1]}`;
        };
    };


};

function testInf() {
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    n1 = parseInt(document.getElementById("dia1").value.trim());
    n2 = parseInt(document.getElementById("dia2").value.trim());
    
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || 
    n1 < 1 || n2 < 1 || n1 == n2 || Math.max(n1, n2) > currentDiags.length) {
        document.getElementById("erricpred").innerHTML = `Error: choose two different numbers of existing diagrams.`
    } else {
        document.getElementById("dia1").innerHTML = n1;
        document.getElementById("dia2").innerHTML = n2;
        d1 = currentDiags[n1 - 1];
        d2 = currentDiags[n2 - 1];
        if (d1.sub == d2.sub) {
            d3 = inference(d1, d2);
            addDiagram(d3, `D${n1}` + '\u2295' + `D${n2}`,"");

            // Borra contenido del formulario
            document.getElementById("dia1").value = "";
            document.getElementById("dia2").value = "";
        } else {
            document.getElementById("erricpred").innerHTML = `Error: choose two diagrams with the same subject.`
        };
    };


}


function testTr() {
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    nT = parseInt(document.getElementById("diaT").value.trim());

    if (!Number.isInteger(nT) || nT < 1 || nT > currentDiags.length) {
        document.getElementById("erricpred").innerHTML = `Error: introduce the number of an existing diagram.`
    } else {
        document.getElementById("diaT").value = nT;
        dT = currentDiags[nT - 1];
        newT = transformation(dT);
        if (newT != void (0)) {
            addDiagram(newT, `Tr(D${nT})`,"");

            // Borra contenido del formulario
            document.getElementById("diaT").value = "";

        } else {
            document.getElementById("erricpred").innerHTML = `Error: the chosen diagram cannot be transformed.`
        };
    };
}


function testConv() {
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    nC = parseInt(document.getElementById("diaCN").value.trim()); // Number of the diagram

    if (!Number.isInteger(nC) || nC < 1 || nC > currentDiags.length) {
        document.getElementById("erricpred").innerHTML = `Error: introduce the number of an existing diagram.`
    } else {
        document.getElementById("diaCN").value = nC;
        dOrig = currentDiags[nC - 1];
        // Lowercase and trim the input:
        inputLit = document.getElementById("diaCP").value.toLowerCase().trim();
        // Read the proposition: 
        pC = readProp(inputLit);         
        if (!pC[0]) {
            document.getElementById("erricsubj").innerHTML = `Error in the literal: ${pC[1]}`;
        } else {
            prop = pC[1];
            // Lowercase the input:
            document.getElementById("diaCP").value = prop;
            // leer proposición
            /*
            Si la proposición no está bien formada, informar
            En otro caso, lanzar conversión, si da error, informar, en otro caso imprimir
            */
            newD = conversion(dOrig, prop);
            if (newD != void (0)) {
                addDiagram(newD, `Conv(D${nC}, ${prop})`,"");

                // Borra formulario
                document.getElementById("diaCN").value = "";
                document.getElementById("diaCP").value = "";
            } else {
                document.getElementById("erricpred").innerHTML = `Error: the diagram cannot be converted with the given literal.`
            };
        };
    };
};



function testExt() {
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    nC = parseInt(document.getElementById("extCN").value.trim()); // Number of the diagram

    if (!Number.isInteger(nC) || nC < 1 || nC > currentDiags.length) {
        document.getElementById("erricpred").innerHTML = `Error: introduce the number of an existing diagram.`
    } else {
        document.getElementById("extCN").value = nC;
        dOrig = currentDiags[nC - 1];
        inputLit = document.getElementById("extCP").value.toLowerCase().trim();
        pC = readProp(inputLit); // Literal for the extraction
        if (!pC[0]) {
            document.getElementById("erricsubj").innerHTML = `Error in the literal: ${pC[1]}`;
        } else {
            prop = pC[1];
            document.getElementById("extCP").value = prop;
            // leer proposición
            /*
            Si la proposición no está bien formada, informar
            En otro caso, lanzar extracción, si da error, informar, en otro caso imprimir
            */
            newD = extraction(dOrig, prop);
            if (newD != void (0)) {
                if(newD.all.length == 0 && newD.in.length == 1 && newD.in[0].length ==0){
                    document.getElementById("erricpred").innerHTML = `Error: diagram ${nC} becomes trivial if proposition ${prop} is extracted.`
                } else {
                    addDiagram(newD, `Ext(D${nC}, ${prop})`,"");
                };
                // Borra formulario
                document.getElementById("extCN").value = "";
                document.getElementById("extCP").value = "";
            } else {
                document.getElementById("erricpred").innerHTML = `Error: the proposition ${prop} cannot be extracted from diagram ${nC}.`
            };
        };
    };
};

function runExercise() {
    currentDiags = [];
    px = initx;
    py = inity;
    document.getElementById("panelSVG").innerHTML = "";
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";

    doingExercise = true;
    exerciseNumber = parseInt(document.getElementById("exerN").value);
    exercise = diagExercises[exerciseNumber];

    document.getElementById("exercHint").innerHTML = exercise[2];

    example = exercise[4];
    // Draw the hints diagrams
    var color;
    var otherText;
    for (var i = 0; i < example.length; i++) {
        color = color1;
        otherText = "";
        if (example[i].length > 1) {
            if (example[i][1] == "prem") {
                color = "green";
            }
            else {
                color = "blue";
            };
            otherText = example[i][2];
        };
        
        var datos = example[i][0];

        switch (datos[0]) {
            case "new_all_all":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_All_All(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 400);
                })(datos, otherText, color);
                break;
            case "new_all_some":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_All_Some(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "new_some_all":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_Some_All(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "new_some_some":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_Some_Some(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "conv":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(conversion(currentDiags[datos[1]-1], datos[2]),`Conv(D${datos[1]},${datos[2]})`, otherText, color);
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "inf":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(inference(currentDiags[datos[1]-1], currentDiags[datos[2]-1]), 
                            `D${datos[1]}\u2295D${datos[2]}`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "ext":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(extraction(currentDiags[datos[1]-1], datos[2]), `Ext(D${datos[1]},${datos[2]})`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "trans":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(transformation(currentDiags[datos[1]-1]), `Tr(D${datos[1]})`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;

        };
    };

};


function runExample() {
    currentDiags = [];
    px = initx;
    py = inity;
    document.getElementById("panelSVG").innerHTML = "";
    // Borrar mensajes de error
    document.getElementById("erricsubj").innerHTML = "&nbsp;";
    document.getElementById("erricpred").innerHTML = "&nbsp;";
    // Borrar mensaje de ejercicio
    document.getElementById("exercHint").innerHTML = "&nbsp;";

    example = diagExamples[parseInt(document.getElementById("exampleN").value)].slice(1);
    
    // document.getElementById("erricpred").innerHTML = JSON.stringify(example);

    var color;
    var otherText;
    for (var i = 0; i < example.length; i++) {
        color = color1;
        otherText = "";
        if (example[i].length > 1) {
            if (example[i][1] == "prem") {
                color = "green";
            }
            else {
                color = "blue";
            };
            otherText = example[i][2];
        };
        
        var datos = example[i][0];

        switch (datos[0]) {
            case "new_all_all":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_All_All(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "new_all_some":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_All_Some(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "new_some_all":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_Some_All(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "new_some_some":
                (function (datos, otherText, color) {
                    setTimeout(
                        function () {
                            addDiagram(new_diagram_Some_Some(datos[1], datos[2]), 
                            "Premise",otherText, color)
                        }, i * 1000);
                })(datos, otherText, color);
                break;
            case "conv":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(conversion(currentDiags[datos[1]-1], datos[2]),`Conv(D${datos[1]},${datos[2]})`, otherText, color);
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "inf":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(inference(currentDiags[datos[1]-1], currentDiags[datos[2]-1]), 
                            `D${datos[1]}\u2295D${datos[2]}`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "ext":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(extraction(currentDiags[datos[1]-1], datos[2]), `Ext(D${datos[1]},${datos[2]})`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;
            case "trans":
                (function (datos, otherText, color, currentDiags) {
                    setTimeout(
                        function () {
                            addDiagram(transformation(currentDiags[datos[1]-1]), `Tr(D${datos[1]})`, otherText, color)
                        }, i * 1000);
                })(datos, otherText, color, currentDiags);
                break;

        };
    };

    /*
        switch(document.getElementById("exampleN").value){
            case "barbara":
                // all M is P
                addDiagram(new_diagram_All_Some("m","p"),"All m are p","green");
                // all S is M
                setTimeout(() => {
                    addDiagram(new_diagram_All_Some("s","m"),"All s are m","green")
                }, 1000);
    
                setTimeout(() => {
                    addDiagram(conversion(currentDiags[1],"m"),"Conv(D2,m)")
                }, 2000);
    
                setTimeout(() => {
                    addDiagram(inference(currentDiags[0],currentDiags[2]),"D1\u2295D3")
                }, 3000);
    
                setTimeout(() => {
                    addDiagram(conversion(currentDiags[3],"s"),"Conv(D4,s)")
                }, 4000);
    
                setTimeout(() => {
                    addDiagram(extraction(currentDiags[4],"m"),"Ext(D5,m): All s are p","blue")
                }, 5000);
                
                break;
            case "darii":
                // All M is P
                addDiagram(new_diagram_All_Some("m","p"),"All m are p","green");
                // some S are M
                setTimeout(() => {
                    addDiagram(new_diagram_Some_Some("s","m"),"Some s are m","green")
                }, 1000);
    
                setTimeout(() => {
                    addDiagram(conversion(currentDiags[1],"m"),"Conv(D2,m)")
                }, 2000);
    
                setTimeout(() => {
                    addDiagram(inference(currentDiags[0],currentDiags[2]),"D1\u2295D3")
                }, 3000);
    
                setTimeout(() => {
                    addDiagram(conversion(currentDiags[3],"s"),"Conv(D4,s)")
                }, 4000);
    
                setTimeout(() => {
                    addDiagram(extraction(currentDiags[4],"m"),"Ext(D5,m): Some s are p","blue")
                }, 5000);
    
        }*/
};




/*

Funciones para la interfaz

*/

function addDiagram(newD, textShow1, textShow2, color = color1) {

    var diagColor = color;    
    if(doingExercise && (JSON.stringify(sortDiagram(newD)) == JSON.stringify(sortDiagram(diagExercises[exerciseNumber][3])))){
        diagColor = "blue";
        document.getElementById("exercHint").innerHTML += "<br/><div style=\"color:blue;\">Congratulations! You have solved the exercise.</div>";
        doingExercise = false;
        exerciseNumber = -1;
    }

    currentDiags[currentDiags.length] = newD;
    panel = document.getElementById("panelSVG");
    if (currentDiags.length <= 18) {
        drawDiagram(newD, px, py, diagColor, panel, currentDiags.length, textShow1, textShow2);
        if (currentDiags.length % 6 > 0) {
            px += 250;
        } else {
            px = initx;
            py += 250;
        }
    } else {
        // Error
        document.getElementById("erricsubj").innerHTML = `It is not possible to display more diagrams in the current panel.`;
    };

}


function readProp(theStr) {
    if (theStr.length == 1 && theStr.match(/[a-z]/)) {
        return [true, theStr];
    }
    if (theStr.length == 2 && theStr[0].match(/[~|¬|-]/) && theStr[1].match(/[a-z]/)) {
        return [true, '¬' + theStr[1]];
    }
    return [false, "Check the syntax (a, b, ¬a, ¬b, ...)"];
};



/*

Proposiciones y diagramas de ejemplo para probar las funciones

*/


// Proposición 1 (a)
const prop1 = "a";

// Proposición 2 (¬ b)
const prop2 = "¬b";

// Proposición 3 (c)
const prop3 = "c";

// Todo a es ¬b (ax¬b)
const diag1 = {
    sub: "a",    // Sujeto "a"
    all: ["¬b"], // Un solo lado con "b", por tanto es "todo a"
    in: [[]],   // Una única región, vacía
    out: ["¬b"]  // Fuera está "¬b"
};

// Algún a es c (ac)
const diag2 = {
    sub: "a",        // Sujeto "a"
    all: [],         // No hay nada universal
    in: [["c"], []], // Una región con "c" y otra vacía
    out: ["c"]       // Fuera está "c"
};

/*

    Functions

*/


// Check whether two propositions are the same
function equalProps(p1, p2) {
    return (p1 == p2);
};

// Check whether two propositions are contradictory
function oppositeProps(p1, p2) {
    return ((p1 == "-" + p2) || (p2 == "-" + p1));
};

// Check whether two propositions are different
function differentProps(p1, p2) {
    return (!equalProps(p1, p2) && !oppositeProps(p1, p2));
};

// Get the complementary of a proposition
function complProp(p) {
    if (p[0] == "¬") {
        return p[1];
    } else {
        return `¬${p}`;
    };
};

// Clone an object (new object without reference to the old one)
function clone(objeto) {
    return Object.assign({}, objeto);
}

// Search whether a proposition belongs to a list
function search(arrayProp, prop) {
    return arrayProp.includes(prop);
};

/*

Creation of Marlo Diagrams

*/

// Create universal-universal diagram
function new_diagram_All_All(p1, p2) {

    var diagram = {
        sub: p1,
        all: [p2],
        in: [[]],
        out: []
    };
    return sortDiagram(diagram);
};

// Create universal-particular diagram
function new_diagram_All_Some(p1, p2) {
    var diagram = {
        sub: p1,
        all: [p2],
        in: [[]],
        out: [p2]
    };
    return sortDiagram(diagram);
};

// Create particular-universal diagram
function new_diagram_Some_All(p1, p2) {
    var diagram = {
        sub: p1,
        all: [],
        in: [[p2], []],
        out: []
    };
    return sortDiagram(diagram);
};

// Create particular-particular diagram
function new_diagram_Some_Some(p1, p2) {
    var diagram = {
        sub: p1,
        all: [],
        in: [[p2], []],
        out: [p2]
    };
    return sortDiagram(diagram);
};

function sortDiagram(diagA) {
    var newD = {
        sub: diagA.sub,
        all: diagA.all.map(x => [x[x.length - 1], x]).sort().map(x => x[1]), // Ordena por prop.
        in: diagA.in.map(y =>
            y.map(x => [x[x.length - 1], x]).sort().map(x =>    // Ordena cada región por literal
                x[1])).sort(function (a, b) {
                    if (a.length > b.length)
                        return 1;
                    if (b.length > a.length)
                        return -1;
                    if (a > b)
                        return 1;
                    else
                        return -1;
                }),   // Y todas por tamaño
        out: diagA.out.map(x => [x[x.length - 1], x]).sort().map(x => x[1]), // Ordena por prop.
    };
    return newD;
};

// Check that two *sorted* diagrams are the same
function equalDiagrams(diagA, diagB) {
    return JSON.stringify(diagA) == JSON.stringify(diagB);
}


/*
    
    Text visualization of propositions and diagrams

*/

// text visualization of a proposition
function prop_text_view(prop) {
    return prop;
};

// Text visualization of a array of propositions
function array_prop_text_view(arrP) {
    var out = "";
    if (arrP.length == 0) {
        out = "<li>&empty;</li>";
    } else {
        var s = "";
        for (var i = 0; i < arrP.length; i++) {
            s += prop_text_view(arrP[i]);
            if (i < (arrP.length - 1)) {
                s += ", ";
            };
        };
        out = "<li>" + s + "</li>";
    };
    return out + "\n";
};

// View all sides of a diagram
function all_sides_text_view(dSides) {
    var s = "";
    for (var i = 0; i < dSides.length; i++) {
        s += array_prop_text_view(dSides[i]);
    };
    return s;
};

// Text visualization of a diagram
function diag_text_view(d1, m, n) {
    s = `<div>Diagram #${n} (${m}):
    <ul>
       <li>Subject: ${prop_text_view(d1.sub)}</li>
       <li>All:<ul> ${array_prop_text_view(d1.all)}</ul></li>
       <li>In:<ul>${all_sides_text_view(d1.in)}</ul></li>
       <li>Out:<ul>${array_prop_text_view(d1.out)}</ul></li>
    </ul></div>`;
    return s;
};


/*

Set Theory operations 

*/

function union(arrA, arrB) {
    var rawUn = [...new Set([...arrA, ...arrB])];
    return [...new Set(rawUn.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
};

function unionBig(arrA) {
    var res = [];
    for (var i = 0; i < arrA.length; i++) {
        res = union(res, arrA[i]);
    };
    return res;
};

function intersection(arrA, arrB) {
    return arrA.filter(x => arrB.includes(x));
};

function intersectionBig(arrA) {
    var res = arrA[0];
    for (var i = 0; i < arrA.length; i++) {
        res = intersection(res, arrA[i]);
    };
    return res;
};

function difference(arrA, arrB) {
    return arrA.filter(x => !arrB.includes(x));
};

function differenceBig(arrA, arrB) {
    return arrA.map(x => difference(x, arrB));
};


/*

Operations of Marlo Diagrams

*/

// Scope of a diagram
function scope(diag) {
    return union(
        unionBig([[diag.sub], diag.all, diag.out]),
        unionBig(diag.in));
}

// Inference with two diagrams
function inference(diagA, diagB) {
    if (diagA.sub != diagB.sub) { // If the subject is different
        return void (0);         // return void
    };
    var I = union(differenceBig(diagA.in, diagB.all), differenceBig(diagB.in, diagA.all));

    // [] is removed from I if both [x] and [¬x] belong to I
    sc = union(scope(diagA), scope(diagB));
    Iunit = unionBig(I.filter(x => x.length == 1));
    Iempty = I.filter(x => x.length == 0);
    scBoth = sc.filter(x => (Iunit.indexOf(x) != -1 && Iunit.indexOf(complProp(x)) != -1));
    if (Iempty.length > 0 && scBoth.length > 0) {
        I = I.filter(x => x.length > 0);
    }
    var diagC = {                               // Creation of the new diagram 
        sub: diagA.sub,                   // The same subject
        all: union(diagA.all, diagB.all), // Union of all parts
        in: I,
        out: union(                       // Out part
            difference(diagA.out, difference(scope(diagB), diagB.out)),
            difference(diagB.out, difference(scope(diagA), diagA.out)))
    };
    return sortDiagram(diagC);
};

// Transformation of a diagram
function transformation(diagA) {
    if (diagA.all.length == 1 &&
        diagA.in.length == 1 &&
        diagA.in[0].length == 0) {
        var outT;
        if (diagA.out.length == 0) {
            outT = [];
        } else {
            outT = [complProp(diagA.sub)];
        };
        var diagT = {
            sub: complProp(diagA.all[0]),
            all: [complProp(diagA.sub)],
            in: [[]],
            out: outT
        };
        return sortDiagram(diagT);
    } else {
        inUn = unionBig(diagA.in);
        if (diagA.all.length == 0 &&
            diagA.in.length == 2 &&
            inUn.length == 1 &&
            diagA.out.length == 0) {
            var diagT = {
                sub: complProp(inUn[0]),
                all: [],
                in: [[complProp(diagA.sub)], []],
                out: []
            };
            return sortDiagram(diagT);
        } else {
            return void (0);
        }
    }
};

// Conversion of a diagram
function conversion(diagA, prop) {
    if (union(diagA.all, unionBig(diagA.in)).indexOf(prop) == -1) {
        return void (0);
    } else {
        var A;  // Parte "all"
        if (diagA.out.indexOf(prop) != -1) {
            A = [];
        } else {
            var B = differenceBig(diagA.in.filter(x => x.indexOf(prop) != -1), [prop]);
            var C;
            if (B.length > 0) {
                C = intersectionBig(B);
            } else {
                C = [];
            }
            A = unionBig([[diagA.sub], difference(diagA.all, [prop]), C]);
        };
        var I; // Parte "in"
        if (diagA.all.indexOf(prop) != -1) {
            I = diagA.in.map(x => difference(union(union(x, [diagA.sub]), diagA.all), union(A, [prop])));
        } else {
            I = diagA.in.filter(x =>
                x.indexOf(prop) != -1).map(x =>
                    difference(union(union(difference(x, [prop]), [diagA.sub]), diagA.all), union(A, [prop])));
        };
        if (diagA.out.indexOf(prop) != -1) {
            I = union(I, [[]]);
        }
        var O = intersection(
            union(
                difference(diagA.out, [prop]),
                unionBig(diagA.in.filter(x =>
                    union(x, diagA.all).indexOf(prop) == -1).map(x =>
                        unionBig([x, diagA.all, [diagA.sub]])))),
            union(A, unionBig(I)));
        var diagB = {
            sub: prop,
            all: A,
            in: I,
            out: O
        };
        return sortDiagram(diagB);
    }
};


// Extraction of a proposition in a diagram
function extraction(diagA, prop) {
    if (union(diagA.all, unionBig(diagA.in)).indexOf(prop) == -1) {
        return void (0);
    } else {
        var newIn = diagA.in.map(x => difference(x, [prop]));
        newIn = [...new Set(newIn.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
        var diagB = {
            sub: diagA.sub,
            all: difference(diagA.all, [prop]),
            in: newIn,
            out: difference(diagA.out, [prop]),
        };
        return sortDiagram(diagB);
    }
};




