/*function drawSVG(){
    svg = document.getElementById("panelSVG");

    color1 = "#23A4FF";
    
    // Elipse exterior
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    element.setAttributeNS(null, 'cx', 80);
    element.setAttributeNS(null, 'cy', 100);
    element.setAttributeNS(null, 'rx', 50);
    element.setAttributeNS(null, 'ry', 70);
    element.setAttributeNS(null, 'style', `fill-opacity:0;stroke:${color1};stroke-width:3`);
    svg.appendChild(element);

    // Líneas horizontales
    var coords = "M 30, 100";
    coords += " l 30, 0";
    coords += " m 40, 0";
    coords += " l 30, 0";
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'stroke', color1);
    path.setAttributeNS(null, 'stroke-width', 3);
    path.setAttributeNS(null, 'd', coords);
    path.setAttributeNS(null, 'fill', "url(#gradient)");
    path.setAttributeNS(null, 'opacity', 1.0);
    svg.appendChild(path);

    // Texto medio
    element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', 80);
    element.setAttributeNS(null, 'y', 100);
    element.setAttributeNS(null, 'stroke', color1);
    element.setAttributeNS(null, 'fill', color1);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', "middle"); // Hor
    element.setAttributeNS(null, 'font-family', "Verdana");
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = "¬p";
    svg.appendChild(element);

    // Texto Abajo
    element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', 80);
    element.setAttributeNS(null, 'y', 150);
    element.setAttributeNS(null, 'stroke', color1);
    element.setAttributeNS(null, 'fill', color1);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', "middle"); // Hor
    element.setAttributeNS(null, 'font-family', "Verdana");
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = "¬q ¬r";
    svg.appendChild(element);

    // Texto Arriba
    element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', 80);
    element.setAttributeNS(null, 'y', 50);
    element.setAttributeNS(null, 'stroke', color1);
    element.setAttributeNS(null, 'fill', color1);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', "middle"); // Hor
    element.setAttributeNS(null, 'font-family', "Verdana");
    // Para rotar (prueba)
    element.setAttributeNS(null, 'transform', `rotate(-60, ${80}, ${50})`); // Prueba de rotar
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = "q";
    svg.appendChild(element);

    // Texto Fuera
    element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', 130);
    element.setAttributeNS(null, 'y', 40);
    element.setAttributeNS(null, 'stroke', color1);
    element.setAttributeNS(null, 'fill', color1);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', "middle"); // Hor
    element.setAttributeNS(null, 'font-family', "Verdana");
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = "q?";
    svg.appendChild(element);

    color1 = "#095119";


    drawDiagram(diag1, 300,  100, color1, svg, 3, '(D1'+ '\u2295' + 'D2)');
    drawDiagram(diag2, 550,  100, color1, svg, 4, 'Tr(D1)');
    drawDiagram(diag3, 800,  100, color1, svg, 5, 'Extr(D1,a)');
    drawDiagram(diag6, 1050,  100, color1, svg, 4, 'Tr(D1)');
    drawDiagram(diag3b, 1300,  100, color1, svg, 4, 'Tr(D1)');
    drawDiagram(diag4, 300,  350, color1, svg, 6, '(new)');
    drawDiagram(diag5, 550,  350, color1, svg, 6, '(new)');
    drawDiagram(diag1b, 550,  600, color1, svg, 6, 'Conv(D1,a)');

};

diag1 = {
    sub : "a",
    all : ["b"],
    in  : [[],["c"]],
    //in  : [["c"]],
    out : ["b","c","d"]
};

diag1b = {
    sub : "a",
    all : [],
    in  : [[],["c"]],
    //in  : [["c"]],
    out : ["b","c","d"]
};

diag2 = {
    sub : "a",
    all : ["¬b"],
    //in  : [["c"], []],
    in  : [["c","¬d"]],
    out : ["b","c","¬d"]
};

diag3 = {
    sub : "a",
    all : ["b"],
    in  : [[],["c"], ["a","c"]],
    //in  : [["c"]],
    out : ["b","c","¬d","e"]
};

diag3b = {
    sub : "a",
    all : [],
    in  : [[],["c"], ["a","c"]],
    //in  : [["c"]],
    out : ["b","c","¬d","e"]
};


diag4 = {
    sub : "a",
    all : ["b"],
    in  : [[],["c"], ["a","c"],["¬a"],["d"]],
    //in  : [["c"]],
    out : ["b","c","¬d","e"]
};

diag5 = {
    sub : "¬t",
    all : ["b"],
    in  : [[],["c"], ["a","c"],["d"]],
    //in  : [["c"]],
    out : ["b","c","¬d","e","f"]
};

diag6 = {
    sub : "¬t",
    all : [],
    in  : [[],["c"], ["a","c"],["d"]],
    //in  : [["c"]],
    out : ["b","c","¬d","e","f"]
};


// Remove...
function union(arrA, arrB){
    var rawUn = [...new Set([...arrA, ...arrB])];
    return [...new Set(rawUn.map(o => JSON.stringify(o)))].map(s => JSON.parse(s));
};
*/

color1 = "#696967";//"#095119";

function drawDiagram(diag, xp, yp, color, panel, dn, dText, dText2 = ""){
    var element;
    var coords;
    var path;
    dS = diag.sub;
    dA = diag.all;
    dI = diag.in;
    dO = diag.out;
    drawText(`D${dn}: ${dText}`, xp, yp+90, color,"middle",panel);
    drawText(dText2, xp, yp+120, color, "middle",panel);
    switch(dI.length){
        case 1:
            drawEllipse(xp,yp,color,panel);
            drawText(dS,xp,yp,color,"middle",panel);
            drawEllipseOut(dO,xp,yp,color,panel);
            drawText(union(dA,dI[0]).join(''),xp,yp+40,color,"middle",panel);
            break;
        case 2:
            drawEllipse(xp,yp,color,panel);
            drawEllipseBars(xp,yp,color,panel);
            drawText(dS,xp,yp,color,"middle",panel);
            drawEllipseOut(dO,xp,yp,color,panel);
            drawText(union(dA,dI[0]).join(''),xp,yp-40,color,"middle",panel);
            drawText(union(dA,dI[1]).join(''),xp,yp+40,color,"middle",panel);
            break;
        case 3:
            drawTriangle(xp,yp,color,panel);
            drawText(dS,xp,yp+20,color,"middle",panel);
            drawTriangleOut(dO,xp,yp,color,panel);        
            drawTextRotEmp(union(dA,dI[0]).join(''),xp+25,yp+5,color,"middle",60,panel);
            drawTextRotEmp(union(dA,dI[1]).join(''),xp-25,yp+5,color,"middle",-60,panel);   
            drawTextRotEmp(union(dA,dI[2]).join(''),xp,yp+60,color,"middle",0,panel);   
            break;
        case 4:
            drawSquare(xp,yp,color,panel);
            drawText(dS,xp,yp,color,"middle",panel);
            drawSquareOut(dO,xp,yp,color,panel);
            drawTextRotEmp(union(dA,dI[0]).join(''),xp+55,yp,color,"middle",90,panel);
            drawTextRotEmp(union(dA,dI[1]).join(''),xp-55,yp,color,"middle",-90,panel);
            drawTextRotEmp(union(dA,dI[2]).join(''),xp,yp+55,color,"middle",0,panel);
            drawTextRotEmp(union(dA,dI[3]).join(''),xp,yp-55,color,"middle",0,panel);
            break;
        default:
            drawText(`Subj: ${dS}`,xp-60,yp-46,"red","start",panel);
            drawText(`All: ${showStrSet(dA)}`,xp-60,yp-21,"red","start",panel);
            drawText(`In: ${showInStr(dI.slice(0,2))},`,xp-60,yp+4,"red","start",panel);
            drawText(`${showInStr(dI.slice(2))}`,xp-60,yp+29,"red","start",panel);
            drawText(`Out: ${showStrSet(dO)}`,xp-60,yp+54,"red","start",panel);            
    }    
};

function showStrSet(strSet){
    return `{${strSet.join()}}`;
};

function showInStr(inPart){
    return inPart.map(x => `{${x.join()}}`).join()
};

function drawEllipse(xp,yp,color,panel){
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    element.setAttributeNS(null, 'cx', xp);
    element.setAttributeNS(null, 'cy', yp);
    element.setAttributeNS(null, 'rx', 50);
    element.setAttributeNS(null, 'ry', 70);
    element.setAttributeNS(null, 'style', `fill-opacity:0;stroke:${color};stroke-width:3`);
    panel.appendChild(element);
};

function drawTriangle(xp,yp,color,panel){
    lado = 2*140/Math.sqrt(3);
    var thePoints = `${xp}, ${yp-70} ${xp+(lado/2)}, ${yp+70} ${xp-(lado/2)}, ${yp+70}`;
    var figure = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    figure.setAttributeNS(null, 'stroke', color);
    figure.setAttributeNS(null, 'stroke-width', 3);
    figure.setAttributeNS(null, 'points', thePoints);
    figure.setAttributeNS(null, 'fill', "url(#gradient)");
    figure.setAttributeNS(null, 'opacity', 1.0);
    panel.appendChild(figure);
};



function drawSquare(xp,yp,color,panel){
    var thePoints = `${xp-70}, ${yp-70} ${xp+70}, ${yp-70} ${xp+70}, ${yp+70} ${xp-70}, ${yp+70}`;
    var figure = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    figure.setAttributeNS(null, 'stroke', color);
    figure.setAttributeNS(null, 'stroke-width', 3);
    figure.setAttributeNS(null, 'points', thePoints);
    figure.setAttributeNS(null, 'fill', "url(#gradient)");
    figure.setAttributeNS(null, 'opacity', 1.0);
    panel.appendChild(figure);
};


function drawEllipseBars(xp,yp,color,panel){
    // Líneas horizontales
    var coords = `M ${xp - 50}, ${yp}`;
    coords += " l 30, 0";
    coords += " m 40, 0";
    coords += " l 30, 0";
    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttributeNS(null, 'stroke', color);
    path.setAttributeNS(null, 'stroke-width', 3);
    path.setAttributeNS(null, 'd', coords);
    path.setAttributeNS(null, 'fill', "url(#gradient)");
    path.setAttributeNS(null, 'opacity', 1.0);
    panel.appendChild(path);
};

function drawText(dS,xp,yp,color,alignHor,panel){
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', xp);
    element.setAttributeNS(null, 'y', yp);
    element.setAttributeNS(null, 'stroke', color);
    element.setAttributeNS(null, 'fill', color);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', alignHor); // Hor
    element.setAttributeNS(null, 'font-family', "Verdana");
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = dS;
    panel.appendChild(element);
};

function drawTextRotEmp(dS,xp,yp,color,alignHor,angle,panel){
    var texto = dS;
    if(dS.length == 0){
        texto = "?";
    }
    var element = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    element.setAttributeNS(null, 'x', xp);
    element.setAttributeNS(null, 'y', yp);
    element.setAttributeNS(null, 'stroke', color);
    element.setAttributeNS(null, 'fill', color);
    element.setAttributeNS(null, 'alignment-baseline', "middle"); // Vert
    element.setAttributeNS(null, 'text-anchor', alignHor); // Hor
    element.setAttributeNS(null, 'transform', `rotate(${angle}, ${xp}, ${yp})`); // Prueba de rotar
    element.setAttributeNS(null, 'font-family', "Verdana");
    element.setAttributeNS(null, 'font-size', 25);
    element.textContent = texto;
    panel.appendChild(element);
};


function drawEllipseOut(dO,xp,yp,color,panel){
    inc = 30;
    rx = inc+50;
    ry = inc+70;
    frac = 8;
    var init = Math.PI/5;
    if(dO.length > 4){
	init = Math.PI/3;
    };
    for(var i=0; i<dO.length; i++){
        drawText(`${dO[i]}?`,xp+(rx*Math.cos(init-(i*Math.PI/frac))),yp-(ry*Math.sin(init-(i*Math.PI/frac))),color,"middle",panel);
    };
};

function drawTriangleOut(dO,xp,yp,color,panel){
    for(var i=0; i<dO.length; i++){
        drawText(`${dO[i]}?`,xp+60+1.4*(i*10),yp-60+1.4*(i*22),color,"end",panel);
    };
};

function drawSquareOut(dO,xp,yp,color,panel){
    for(var i=0; i<dO.length; i++){
        drawText(`${dO[i]}?`,xp+120,yp-60+1.4*(i*22),color,"end",panel);
    };
};
