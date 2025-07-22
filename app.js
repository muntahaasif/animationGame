var model1 = document.getElementById("model1");
var speed = 5;
var flag = false;
function model(takeOrder){
    if(takeOrder === "forward"){
        speed += 5;
        model1.style.left = speed + "px";
        if(!flag){
             model1.src = 'https://www.fightersgeneration.com/characters/earthquake-cutthroat.gif';
        }
      flag = true;   

    }

    
    else if (takeOrder === "backward"){
        speed += -5;
        model1.src = 'https://fightersgeneration.com/np/colors/earth-1p.png';
        model1.style.left = speed + "px";
    }
}

function earthQuake(event) {
    console.log(event.key);
    if (event.key === "ArrowRight") {
        model("forward")
    }else if (event.key === "ArrowLeft"){
        model("backward");
    }
}

window.addEventListener("keydown", earthQuake);