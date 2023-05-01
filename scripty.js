var caracter = document.getElementById('caracter')
var nemesis = document.getElementById('nemesis')
var caracter_position = [0,0]
var nemesis_position =[1070,0]
function movimentação(tecla){
    switch(tecla.key){
        case "w":
            if(caracter_position[1]<=0){
                break
            }else{
                caracter_position[1]= caracter_position[1] - 15
                caracter.style.setProperty("top",`${caracter_position[1]}px`)
                break
            }
        case "a":
            if(caracter_position[0]<=0){
                break
            }else{
                caracter_position[0]= caracter_position[0] - 15
                caracter.style.setProperty("left",`${caracter_position[0]}px`)
                break
            }
        case 's':
            if(caracter_position[1]>=465){
                break
            }else{
                caracter_position[1]= caracter_position[1] + 15
                caracter.style.setProperty("top",`${caracter_position[1]}px`)
                break
            }
        case 'd':
            if(caracter_position[0]>=1050){
                break
            }else{
                caracter_position[0]= caracter_position[0] + 15
                caracter.style.setProperty("left",`${caracter_position[0]}px`)
            break
            }
        default:
            break
    }
}
function perdeu(){
    alert('voce perdeu')
}
function nemesis_movent(){
    var X_distance = parseInt(nemesis_position[0]) - parseInt(caracter_position[0]);
    var Y_distance = parseInt(nemesis_position[1]) - parseInt(caracter_position[1]);
    console.log(X_distance)
    if(X_distance < 0){
        nemesis_position[0]= nemesis_position[0] + 15
        nemesis.style.setProperty("left",`${nemesis_position[0]}px`)
        X_distance = nemesis_position[0] - caracter_position[0]
    }
    if(X_distance > 0){
        nemesis_position[0]= nemesis_position[0] - 15
        nemesis.style.setProperty("left",`${nemesis_position[0]}px`)
        X_distance = nemesis_position[0] - caracter_position[0]
    }
    if(Y_distance > 0 ){
        nemesis_position[1]= nemesis_position[1] - 15
        nemesis.style.setProperty("top",`${nemesis_position[1]}px`)
        Y_distance = nemesis_position[1] - caracter_position[1]
    }
    if(Y_distance < 0){
        nemesis_position[1]= nemesis_position[1] + 15
        nemesis.style.setProperty("top",`${nemesis_position[1]}px`)
        Y_distance = nemesis_position[1] - caracter_position[1]
    }
    let raio =(X_distance**2+Y_distance**2)**(1/2)
    if(raio < 30){
        alert('voce perdeu')
    }    
}
setInterval(nemesis_movent,150)
caracter.addEventListener('click',perdeu)
document.addEventListener('keypress',movimentação)
function lose(){
    let raio =(X_distance**2+Y_distance**2)**(1/2)
    if(raio < 30){
        alert('voce perdeu')

    }    
}




