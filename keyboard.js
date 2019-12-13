
 let boxTop = 200;
 let boxLeft = 200;
 const boxElement = document.getElementById("box")

    document.addEventListener("keydown", function(event)  {
        console.log(event.key)

  if (event.key === "ArrowDown") {
    boxTop += 10
    boxElement.style.top = boxTop + "px"
  }


        
             else if (event.key === "ArrowUp") {
            boxTop -= 10
            boxElement.style.top = boxTop + "px"
             }


        
         else if (event.key === "ArrowLeft") {
            boxLeft -= 10
            boxElement.style.left = boxLeft + "px"


        }
         else if (event.key === "ArrowRight") {
            boxLeft += 10
            boxElement.style.top = boxTop + "px"
        }
    })