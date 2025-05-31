const boxId = document.querySelectorAll(".box");
console.log(boxId);
const startBtn = document.querySelector("#btn1");
const stopBtn  = document.querySelector("#btn2");
const clearBtn = document.querySelector("#btn3")
function generateRandomColor() {
    let rgba = 0 ;
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let alpha = Math.round(Math.random()*10);
    rgba = `rgba(${red},${green},${blue},${alpha})`;
    return rgba;
}

let changerang ;

startBtn.addEventListener("click",()=>{
    changerang = setInterval(()=>{
        for (let i = 0; i <boxId.length; i++) {
            boxId[i].style.backgroundColor = generateRandomColor()
        }
      },500)
})

clearBtn.addEventListener("click",()=>{
    for (let i = 0; i <boxId.length; i++) {
        boxId[i].style.backgroundColor = "white"
    }
})

stopBtn.addEventListener("click",()=>{
    clearInterval(changerang);
}
);
