let quadrados = document.querySelectorAll("div");
let i = 0;


function jogada(){
    if(this.innerHTML == ""){
        if(i % 2 == 0){
            this.innerHTML = "x"    
            this.style.color = "blue";
            i++;
        } else {
            this.innerHTML = "o";
            this.style.color = "";
            i++;
        }
    }
}

for (let quadrado of quadrados) {
    quadrado.onclick = jogada;
}

function verificarFinal(){
    if(casa1 == casa2 == casa3 && casa4 == casa5 == casa6 && casa7 == casa7 == casa9 && casa1 == casa5 == casa9 && casa3 == casa5 == casa7 && casa2 == casa5 == casa8){
        resposta.innerHTML = "!!! VOCÊ VENCEU !!!";
    }
    else{
        resposta.innerHTML= "Ainda não foi !!";
    }
}


