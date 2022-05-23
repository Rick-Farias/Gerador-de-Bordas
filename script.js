
var area = document.getElementById("area");

area.addEventListener("keyup", function(){
    let topleft = document.getElementById("topleft");
    let toprigth = document.getElementById("toprigth");
    let bottomleft = document.getElementById("bottomleft");
    let bottomrigth = document.getElementById("bottomrigth");

    let quadrado = document.getElementById("quadrado");
    
    quadrado.style.borderTopLeftRadius = topleft.value + "px"; 
    quadrado.style.borderTopRightRadius = toprigth.value + "px";
    quadrado.style.borderBottomLeftRadius = bottomleft.value + "px"; 
    quadrado.style.borderBottomRightRadius = bottomrigth.value + "px";

    let borda = getComputedStyle(quadrado).getPropertyValue("border-radius");

    let codigo = document.getElementById("codigo");
    codigo.innerHTML = "Border-radius: " + borda +";" ;
}
)

 
