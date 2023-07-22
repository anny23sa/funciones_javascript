
const divA = document.getElementById("a");
const divB = document.getElementById("b");
const divC = document.getElementById("c");
const divD = document.getElementById("d");
let colorLetra;
const keyDiv = document.getElementById("key")
const keyDiv1 = document.getElementById("key1")
const h1 = document.getElementById("mensaje3")
const changeBackgroundColor = (valor) => {
    console.log('valor del evento: ', valor)

    if (valor == 1) return divA.style.backgroundColor="black"
if (valor == 2) return divB.style.backgroundColor="black"
if (valor == 3) return divC.style.backgroundColor="black"
if (valor == 4) return divD.style.backgroundColor="black"
};

divA.addEventListener("click", () => changeBackgroundColor(1));
divB.addEventListener("click", () => changeBackgroundColor(2));
divC.addEventListener("click", () => changeBackgroundColor(3));
divD.addEventListener("click", () => changeBackgroundColor(4));
 
function changeColor(event){
    console.log(event.key)
    if(event.key ==="a" || event.key === "A"){
        keyDiv.style.backgroundColor = "pink";
        document.getElementById("mensaje").textContent = "Elegiste letra a/A que es color Rosado";
        return
    }else if(event.key === "s" || event.key === "S"){
        keyDiv.style.backgroundColor = "orange";
        document.getElementById("mensaje").textContent = "Elegiste letra s/S que es color Naranjo";
        return
    }else if(event.key === "d" || event.key === "D"){
        keyDiv.style.backgroundColor = "skyblue";
        document.getElementById("mensaje").textContent = "Elegiste letra d/D que es color Celeste";
        return
    }
    if(event.key ==="q" || event.key === "Q"){
        keyDiv1.style.backgroundColor = "yellow";
        document.getElementById("mensaje1").textContent = "Elegiste letra q/Q que es color Amarillo";
        return
    }else if(event.key === "w" || event.key === "W"){
        keyDiv1.style.backgroundColor = "blue";
        document.getElementById("mensaje1").textContent = "Elegiste letra w/W que es color Azul";
        return
    }else if(event.key === "e" || event.key === "E"){
        keyDiv1.style.backgroundColor = "brown";
        document.getElementById("mensaje1").textContent = "Elegiste letra e/E que es color Café";
        return
    }else{
        h1.innerHTML = "Elegiste la tecla equivocada.";
    }
}
 
document.addEventListener("keydown", changeColor);







