let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let turn0 = true;
let count = 0;
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turn0 = true;
    count = 0;
    enabledBtns();
   msgContainer.classList.add("hide"); 
} 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        if(turn0){
            box.style.color = "#d4a373";
            box.innerText = "O";
            turn0=false;
        }else{
            box.style.color = "#4a5759";
            box.innerText = "X";
            turn0=true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const diabledBtns = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner =(winner)=>{
    message.innerText=  `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    diabledBtns();
}
const drawMatch = ()=>{
    message.innerText = `Match is draw. Well played!`;
    msgContainer.classList.remove("hide");
    diabledBtns();
}
const checkWinner = ()=>{
    for(let pattern of winningPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos1val != "" && pos1val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner : ", pos1val);
                showWinner(pos1val);
            }
            else if(count==9){
                drawMatch();
            }
        }
    }
    
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);