let formulario=document.getElementById("formulario")
let section=document.querySelector(".intro")
let contenido=document.querySelector(".contenido")
let bandera=null
let turno=0
let tablero=[]

formulario.addEventListener("submit",e=>{
    e.preventDefault()
    let jugador=document.getElementById("jugador").value
    let jugador2=document.getElementById("jugador2").value
    if(jugador==""||jugador2==""){
        alert("Ingrese nombre del jugador 1 o 2!!")
    }else{
        bandera=true
        let xhr=Ajax("juego.html")
        xhr.addEventListener("load",()=>{
            if(xhr.status==200){
                section.style.display="none"
                contenido.innerHTML=xhr.response
                if(bandera==true){
                    let divs=document.querySelectorAll("div")
                    divs.forEach((div,i)=>{
                        tablero[i]=document.getElementById("cuadro"+i)
                        tablero[i].value="I"
                        div.addEventListener("click",()=>{
                            if(bandera==true && turno==0){
                                tablero[i].value="X"
                                let p=document.createElement("p")
                                p.innerText="X"
                                p.classList.add("letra")
                                div.appendChild(p)
                                turno=1
                                
                            }else{
                                tablero[i].value="O"
                                let p=document.createElement("p")
                                p.innerText="O"
                                p.classList.add("letra")
                                div.appendChild(p)
                                turno=0
                            }
                            if((tablero[0].value=="X" && tablero[1].value=="X"&& tablero[2].value=="X") || (tablero[3].value=="X" && tablero[4].value=="X" && tablero[5].value=="X") || (tablero[6].value=="X" && tablero[7].value=="X" && tablero[8].value=="X")){
                                bandera=false
                                div.innerHTML=""
                              alert("Gano el jugador: "+jugador)
                            }
                            if((tablero[0].value=="X" && tablero[3].value=="X"&& tablero[6].value=="X") || (tablero[1].value=="X" && tablero[4].value=="X" && tablero[7].value=="X") || (tablero[2].value=="X" && tablero[5].value=="X" && tablero[8].value=="X")){
                                bandera=false
                                div.innerHTML=""
                                alert("Gano el jugador: "+jugador)
                            }
                            if((tablero[0].value=="X" && tablero[4].value=="X"&& tablero[8].value=="X") || (tablero[2].value=="X" && tablero[4].value=="X" && tablero[6].value=="X")){
                                bandera=false
                                div.innerHTML=""
                                alert("Gano el jugador: "+jugador)
                            }
                            if((tablero[0].value=="O" && tablero[1].value=="O"&& tablero[2].value=="O") || (tablero[3].value=="O" && tablero[4].value=="O" && tablero[5].value=="O") || (tablero[6].value=="O" && tablero[7].value=="O" && tablero[8].value=="O")){
                                bandera=false
                                div.innerHTML=""
                                alert("Gano el jugador: "+jugador2)
                              }
                              if((tablero[0].value=="O" && tablero[3].value=="O"&& tablero[6].value=="O") || (tablero[1].value=="O" && tablero[4].value=="O" && tablero[7].value=="O") || (tablero[2].value=="O" && tablero[5].value=="O" && tablero[8].value=="O")){
                                  bandera=false
                                  div.innerHTML=""
                                  alert("Gano el jugador: "+jugador2)
                                }
                              if((tablero[0].value=="O" && tablero[4].value=="O"&& tablero[8].value=="O") || (tablero[2].value=="O" && tablero[4].value=="O" && tablero[6].value=="O")){
                                  bandera=false
                                  div.innerHTML=""
                                  alert("Gano el jugador: "+jugador2)
                              }    
                        })
                    })
                }
                let reset=document.getElementById("reseteo")
                    reset.addEventListener("click",()=>{
                    window.location.href="/"
                })
            }
        })  
    }
})

function Ajax(URL){
    let xhr=new XMLHttpRequest
    xhr.open("GET",URL)
    xhr.send()
    return xhr
}

