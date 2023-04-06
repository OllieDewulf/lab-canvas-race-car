const canvas = document.querySelector("canvas");
const startScreen = document.querySelector(".game-intro");
const ctx = canvas.getContext("2d");
const roadImage = new Image ();
roadImage.src = "images/road.png";
const carImage = new Image();
      carImage.src = "images/car.png";
      const carWidth = 50;
      const carHeight = 100;
      let carX = canvas.width / 2 - carWidth / 2;
      let carY = canvas.height - carHeight -20;
let gameOver = false
let animationId
let isGoingLeft = false
let isGoingRight = false

window.addEventListener("load", (event) => {  
  console.log("game is loaded");

document.getElementById("start-button").onclick = () => {
      startGame();  
  };

document.addEventListener("keydown", (event) => {
  console.log(event)
  if (event.code === "ArrowLeft") { 
    isGoingLeft = true
}
  if (event.code === "ArrowRight") {
    isGoingRight = true
}
})

document.addEventListener("keyup", (event) => {
  console.log(event)
  if (event.code === "ArrowLeft") {
    isGoingLeft = false
}
  if (event.code === "ArrowRight") {
    isGoingRight = false
}
})

function startGame() {
      console.log("Start Game");
      startScreen.style.display = "none";
      canvas.style.display = "block";
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
      ctx.drawImage(carImage, carX, carY, carWidth, carHeight);
      if (isGoingLeft === true) {
        carX -= 2
      }
      if (isGoingRight === true) {
        carX += 2
      }
if (gameOver) {
  cancelAnimationFrame(animationId)
} else {
 animationId = requestAnimationFrame(startGame)
} 
  };

});

