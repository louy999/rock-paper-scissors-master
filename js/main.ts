//root
let containerBeGame = document.querySelector("#container") as HTMLDivElement;
let containerRole = document.querySelector(".con-role") as HTMLDivElement;
let closeImg = document.querySelector(
  ".con-role >div >img"
) as HTMLImageElement;
let btnOpenRole = document.querySelector(".btn-rules") as HTMLInputElement;
let continuerChouse = document.querySelector(".chouse") as HTMLDivElement;
let divChooses = document.querySelectorAll(".chouse > div");
let playTheGame = document.querySelector(".play") as HTMLDivElement;
let myChouseInGame = document.querySelector(
  ".play .you .border-image"
) as HTMLDivElement;
let randomChooses = document.querySelector(
  ".play .hous .border-image"
) as HTMLDivElement;
let myChouse;
let arrayChooseGame = ["rock", "paper", "scissors"];
let lossOrWinٍSpan = document.querySelector(
  ".lose-win span"
) as HTMLSpanElement;
let lossOrWin = document.querySelector(".lose-win span") as HTMLDivElement;
let numberScore = document.querySelector(".score .number") as HTMLSpanElement;

// function for close role and open
function theGameRules() {
  //close role
  closeImg?.addEventListener("click", () => {
    containerRole.style.display = "none";
    containerBeGame.classList.remove("role");
  });
  //open
  btnOpenRole.addEventListener("click", () => {
    containerRole.style.display = "block";
    containerBeGame.classList.add("role");
  });
}
theGameRules();
function myChoose(e) {
  continuerChouse.style.display = "none";
  playTheGame.style.display = "flex";
  let divCreate = document.createElement("div");
  divCreate.classList.add(e.classList[0]);
  divCreate.innerHTML = e.innerHTML;
  myChouseInGame.appendChild(divCreate);
  e.style.cursor = "default";
  chouseHouse();
  lossAndWin();
}

// function start game with house
function chouseHouse() {
  let x = Math.floor(Math.random() * 3);
  divChooses.forEach((e: any) => {
    if (e.classList[0] == arrayChooseGame[x]) {
      let divCreate = document.createElement("div");
      divCreate.classList.add(e.classList[0]);
      divCreate.innerHTML = e.innerHTML;
      randomChooses.appendChild(divCreate);
    }
  });
}
// function for who win and loss
function lossAndWin() {
  let my = myChouseInGame.children[0].classList[0];
  let you = randomChooses.children[0].classList[0];
  lossOrWin.style.display = "flex";
  if (you == my) {
    lossOrWinٍSpan.innerHTML = "equality";
  } else if (my == "paper" && you == "rock") {
    lossOrWinٍSpan.innerHTML = "you win";
  } else if (my == "paper" && you == "scissors") {
    lossOrWinٍSpan.innerHTML = "you loss";
  } else if (my == "rock" && you == "scissors") {
    lossOrWinٍSpan.innerHTML = "you win";
  } else if (my == "rock" && you == "paper") {
    lossOrWinٍSpan.innerHTML = "you loss";
  } else if (my == "scissors" && you == "paper") {
    lossOrWinٍSpan.innerHTML = "you win";
  } else if (my == "scissors" && you == "rock") {
    lossOrWinٍSpan.innerHTML = "you loss";
  }
}
function playAgain() {
  document.querySelector(".play-again")?.addEventListener("click", () => {
    continuerChouse.style.display = "flex";
    playTheGame.style.display = "none";
  });
}
playAgain();
