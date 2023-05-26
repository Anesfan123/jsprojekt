/*Funktioner för att bytta mellan bilderna */
function bytt_bild(){
    var get = document.getElementById('id_bild');
    if (get.src.match("punkt.PNG")){
         get.src = "fyrapunkter.PNG";
        }
        else{
         get.src = "punkt.PNG";
        }
}
/*Funktion som gömmer bilden */
function göm_bild(){
    document.getElementById("id_bild").src="";
}

function vissa_bild(){
    document.getElementById("id_bild").src="punkt.PNG";
}

function ändra_färg(){
    document.body.style.backgroundColor = 'lightblue';
}

function goodvibes_rubrik(){
    document.getElementById("goodvibes").innerHTML = "Be the best version of you";
}

function tid_nu(){
    document.getElementById("tid").innerHTML = Date();
}

function ändra_header(){
    const elements = document.getElementsByClassName("huvud_div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "center";
      elements[i].style.alignItems = "center";
      elements[i].style.textAlign = "center";
      elements[i].style.background = "pink";
      elements[i].style.margin = "5vh";
    }
    document.getElementById("goodvibes").innerHTML = "Be the best version of you!";
    document.getElementById("tid").innerHTML = Date();
    document.getElementById("id_bild").style.border = "3px solid black";
    
}

function göm_header(){
    const elements = document.getElementsByClassName("huvud_div");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.justifyContent = "left";
      elements[i].style.textAlign = "left";
      elements[i].style.alignItems = "flex-start";
      elements[i].style.margin = "0vh";
      elements[i].style.background = "";
    }
    
    document.getElementById("goodvibes").innerHTML = "";
    document.getElementById("tid").innerHTML = "";
    document.getElementById("id_bild").style.border = "";
}
