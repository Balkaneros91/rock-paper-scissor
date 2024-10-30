document.addEventListener("DOMContentLoaded", function () {
  const startBtn = document.getElementById("start_btn");
  const startWindow = document.getElementsByClassName("start_window");
  const gameWindow = document.getElementsByClassName("game_window");

  startBtn.addEventListener("click", initGame);

  function initGame() {
    console.log("Clicked", startBtn);
  }
    
    
});
