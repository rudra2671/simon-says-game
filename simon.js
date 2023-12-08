let gameSeq = [];
let userseq = [];
let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

let btn = document.querySelector(".strbtn");

btn.addEventListener("click", function(){
    if(started==false){
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
 btn.classList.add("flash");
 setTimeout(function () {
    btn.classList.remove("flash");
 }, 250);
} 

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
       btn.classList.remove("userFlash");
    }, 250);
   }

function levelUp(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let rendInx = Math.floor(Math.random() *4);
    let rendColor = btns[rendInx];
    let rendBtn = document.querySelector(`.${rendColor}`);
    gameSeq.push(rendColor);
    btnFlash(rendBtn);
}

function checkAns(idx){
   
    if (userseq[idx] === gameSeq[idx]){
        if (userseq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was  <b>${level-1}</b>.<br> Press click start button to start game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "black";
        },250);
        reset();
    }

}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of  allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;
}