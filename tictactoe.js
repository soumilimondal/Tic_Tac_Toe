let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;//playerX, playerO
let newgame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");
let start = document.querySelector(".start");
let bodyChange = document.querySelector("body");
let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    start.classList.remove("hidebox");
}
const newGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
    start.classList.remove("hidebox");
    bodyChange.style.backgroundColor = "#31493c";
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) =>{
    msg.innerText = Congratulations, Winner is ${winner};
    bodyChange.style.backgroundColor = "#7A9E7E";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //             boxes[pattern[1]].innerText,
        //             boxes[pattern[2]].innerText
        //             );

    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            start.classList.add("hidebox");
            console.log("Winner",pos1Val);
            showWinner(pos1Val);
        }
    }
    }
};

newgame.addEventListener("click",newGame);
reset.addEventListener("click",resetGame);
