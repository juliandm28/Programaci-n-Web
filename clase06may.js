let contador = 0;
const mensaje = "Buenos dias IUE";

var num1 = "234";
let nombre = "luisito";
let num2 = 4567;
let Num2 = 4567;

function Contar(){
    let elem = document.getElementById("para0"); //ambito local
    contador +=1; //contador=contador+1;
    console.log(contador);
    //alert(contador);
    elem.textContent = contador;
    let elem2 = document.getElementById("titulo");
    elem2.textContent = mensaje + " " + contador;
    console.log(elem2.textContent);
}

function desContar(){
    let elem = document.getElementById("para0"); //ambito local
    contador -=1; //contador=contador-1;
    console.log(contador);
    //alert(contador);
    elem.textContent = contador;
    let elem2 = document.getElementById("titulo");
    elem2.textContent = mensaje + " " + contador;
    console.log(elem2.textContent);
}

function changeColor(newColor){
    var elem = document.getElementById("para");
    console.log(newColor);
    elem.style.backgroundColor = newColor;
}

function changeColor1(newColor, identificador){
    let elem = document.getElementById(identificador);
    console.log(newColor, identificador);
    elem.style.background = newColor;
    elem.textContent = "El color es: " + newColor;
    if((newColor = "blue")){
        elem.className = "caja2";
        elem.style.color = "black";
    }else{
        elem.className = "caja1";
        elem.style.color = "black";
    }
    console.log(elem.className);
}

function changeEstilo(newEstilo, etiqueta){
    var elem = document.getElementById(etiqueta);
    //console.log(newEstilo)
    elem.className = newEstilo;
    console.log(newEstilo);
}

function changeTexto(newTexto, estilo){
    const texto1 =
    "la funcion prompt() nos permite abrir un cuadro de dialogo"
    const texto2 =
    "la funcion prompt() nos permite abrir un cuadro de dialogo"
    const texto3 =
    "la funcion prompt() nos permite abrir un cuadro de dialogo"
    var elem = document.getElementById("para5");
    if(newTexto == "t1"){
        elem.textContent=texto1;
        changeEstilo("caja2")
    }
}

function misparrafos(){
    const p0 =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laudantium et maxime ullam corporis quisquam ad a ab, assumenda doloribus deserunt possimus neque beatae at modi aliquid eligendi ex eos"
    var texto = document.getElementById("mparra");
    var p1 = document.createElement("p");
    contador +=1;
    if(contador==1){
        p1.className="caja1";
    }
    if(contador==2){
        p1.className="caja2";
    }
    if(contador==3){
        p1.className="caja3";
    }
    if(contador<3){
        contador=0;
    }

    p1.innerHTML=p0;
    texto.appendChild(p1);

}