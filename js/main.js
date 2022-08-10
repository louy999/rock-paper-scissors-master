//root
var containerBeGame = document.querySelector("#container");
var containerRole = document.querySelector(".con-role");
var closeImg = document.querySelector(".con-role >div >img");
var btnOpenRole = document.querySelector(".btn-rules");
var continuerChouse = document.querySelector(".chouse");
var divChooses = document.querySelectorAll(".chouse > div");
var playTheGame = document.querySelector(".play");
var myChouseInGame = document.querySelector(".play .you .border-image");
var randomChooses = document.querySelector(".play .hous .border-image");
var myChouse;
var arrayChooseGame = ["rock", "paper", "scissors"];
var lossOrWinٍSpan = document.querySelector(".lose-win span");
var lossOrWin = document.querySelector(".lose-win span");
var numberScore = document.querySelector(".score .number");
// function for close role and open
function theGameRules() {
    //close role
    closeImg === null || closeImg === void 0 ? void 0 : closeImg.addEventListener("click", function () {
        containerRole.style.display = "none";
        containerBeGame.classList.remove("role");
    });
    //open
    btnOpenRole.addEventListener("click", function () {
        containerRole.style.display = "block";
        containerBeGame.classList.add("role");
    });
}
theGameRules();
function myChoose(e) {
    continuerChouse.style.display = "none";
    playTheGame.style.display = "flex";
    var divCreate = document.createElement("div");
    divCreate.classList.add(e.classList[0]);
    divCreate.innerHTML = e.innerHTML;
    myChouseInGame.appendChild(divCreate);
    e.style.cursor = "default";
    chouseHouse();
    lossAndWin();
}
// function start game with house
function chouseHouse() {
    var x = Math.floor(Math.random() * 3);
    divChooses.forEach(function (e) {
        if (e.classList[0] == arrayChooseGame[x]) {
            var divCreate = document.createElement("div");
            divCreate.classList.add(e.classList[0]);
            divCreate.innerHTML = e.innerHTML;
            randomChooses.appendChild(divCreate);
        }
    });
}
// function for who win and loss
function lossAndWin() {
    var my = myChouseInGame.children[0].classList[0];
    var you = randomChooses.children[0].classList[0];
    lossOrWin.style.display = "flex";
    if (you == my) {
        lossOrWinٍSpan.innerHTML = "equality";
    }
    else if (my == "paper" && you == "rock") {
        lossOrWinٍSpan.innerHTML = "you win";
    }
    else if (my == "paper" && you == "scissors") {
        lossOrWinٍSpan.innerHTML = "you loss";
    }
    else if (my == "rock" && you == "scissors") {
        lossOrWinٍSpan.innerHTML = "you win";
    }
    else if (my == "rock" && you == "paper") {
        lossOrWinٍSpan.innerHTML = "you loss";
    }
    else if (my == "scissors" && you == "paper") {
        lossOrWinٍSpan.innerHTML = "you win";
    }
    else if (my == "scissors" && you == "rock") {
        lossOrWinٍSpan.innerHTML = "you loss";
    }
}
function playAgain() {
    var _a;
    (_a = document.querySelector(".play-again")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        continuerChouse.style.display = "flex";
        playTheGame.style.display = "none";
    });
}
playAgain();
