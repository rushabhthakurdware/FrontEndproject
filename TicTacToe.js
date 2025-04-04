// let boxes=document.querySelectorAll(".box");
// let resetbtn=document.querySelector(".reset");
// let newgamebtn=document.querySelector(".new-btn");
// let msg_container=document.querySelector(".msgContainer");
// let msg=document.querySelector("#winner");
// // let XWinner=document.querySelector(".X");
// // let Owinner=document.querySelector(".O");
// let playerO=true;
// let playerX=true;

// const winPatterns=[[0,1,2],[0,3,6],[3,4,5],[0,4,8],[2,4,6],[6,7,8],[1,4,7],[2,5,8]];


// const resetgame=()=>{
//     turnO=true;
//     enabledBoxes();
//     msg_container.classList.add("hide");
// }
// boxes.forEach((box)=>{
// box.addEventListener("click",()=>{
//     console.log("box was clicked");
//     // box.innerText="X";
//     if(playerO){
//         box.innerText="O";
//         playerO=false;
//     }
//     else if(playerX){
//         box.innerText="X";
//         playerO=true;
//     }
//     box.disabled=true;
//     checkWinner();
// })
// });


// const disabledBoxes=()=>{
//     for(let boxs of boxes){
//      boxs.disabled=true;
//     }
// };

// const enabledBoxes=()=>{
//     for(let boxs of boxes){
//      boxs.disabled=false;
//      boxs.innerText="";
//     }
// };
// const showWinner=(winner)=>{
//     msg.innerText= `Congratulations our winner is ${winner}`;
//     msg_container.classList.remove("hide");
//     disabledBoxes();
// };
// const checkWinner=()=>{
//     for(let pattern of winPatterns){
//         // console.log(pattern[0],pattern[1],pattern[2]);
        
//           let pos1val=  boxes[pattern[0]].innerText;
//           let pos2val= boxes[pattern[1]].innerText;
//           let pos3val=  boxes[pattern[2]].innerText ;

//         if(pos1val!="" &&pos2val!="" &&pos3val!="" ){
//             if(pos1val == pos2val && pos2val==pos3val){
//                 console.log("winner",pos1val);
//                 showWinner(pos1val);
                

//             }
           
//         }
        
        
//     }

// }
// newgamebtn.addEventListener("click",(resetgame));

// resetbtn.addEventListener("click",(resetgame));

// let scoreX = 0;
// let scoreO = 0;
// let scoreDraw = 0;

// // Function to update the scoreboard
// function updateScore(winner) {
//     if (winner === 'X') {
//         scoreX++;
//         document.getElementById('scoreX').textContent = scoreX;
//     } else if (winner === 'O'){
//         scoreO++;
//         document.getElementById('scoreO').textContent = scoreO;
//     }
//     else{
//         document.getElementById('scoreDraw').textContent = scoreDraw;
//     }
// }
// -------------------------------------------------------------------------
// let boxes=document.querySelectorAll(".box");
// let resetbtn=document.querySelector(".reset");
// let newgamebtn=document.querySelector(".new-btn");
// let msg_container=document.querySelector(".msgContainer");
// let msg=document.querySelector("#winner");
// // let XWinner=document.querySelector(".X");
// // let Owinner=document.querySelector(".O");
// let playerO=true;
// let playerX=true;

// const winPatterns=[[0,1,2],[0,3,6],[3,4,5],[0,4,8],[2,4,6],[6,7,8],[1,4,7],[2,5,8]];


// const resetgame=()=>{
//     turnO=true;
//     enabledBoxes();
//     msg_container.classList.add("hide");
// }
// boxes.forEach((box)=>{
// box.addEventListener("click",()=>{
//     console.log("box was clicked");
//     // box.innerText="X";
//     if(playerO){
//         box.innerText="O";
//         playerO=false;
//     }
//     else if(playerX){
//         box.innerText="X";
//         playerO=true;
//     }
//     box.disabled=true;
//     checkWinner();
// })
// });


// const disabledBoxes=()=>{
//     for(let boxs of boxes){
//      boxs.disabled=true;
//     }
// };

// const enabledBoxes=()=>{
//     for(let boxs of boxes){
//      boxs.disabled=false;
//      boxs.innerText="";
//     }
// };
// const showWinner=(winner)=>{
//     msg.innerText= `Congratulations our winner is ${winner}`;
//     msg_container.classList.remove("hide");
//     disabledBoxes();
// };
// const checkWinner=()=>{
//     for(let pattern of winPatterns){
//         // console.log(pattern[0],pattern[1],pattern[2]);
        
//           let pos1val=  boxes[pattern[0]].innerText;
//           let pos2val= boxes[pattern[1]].innerText;
//           let pos3val=  boxes[pattern[2]].innerText ;

//         if(pos1val!="" &&pos2val!="" &&pos3val!="" ){
//             if(pos1val == pos2val && pos2val==pos3val){
//                 console.log("winner",pos1val);
//                 showWinner(pos1val);
                

//             }
           
//         }
        
        
//     }

// }
// newgamebtn.addEventListener("click",(resetgame));

// resetbtn.addEventListener("click",(resetgame));

// let scoreX = 0;
// let scoreO = 0;
// let scoreDraw = 0;

// // Function to update the scoreboard
// function updateScore(winner) {
//     if (winner === 'X') {
//         scoreX++;
//         document.getElementById('scoreX').textContent = scoreX;
//     } else if (winner === 'O'){
//         scoreO++;
//         document.getElementById('scoreO').textContent = scoreO;
//     }
//     else{
//         document.getElementById('scoreDraw').textContent = scoreDraw;
//     }
// }
// ---------------------------------------------------------------------------------------

// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector(".reset");
// let newGameBtn = document.querySelector(".new-btn");
// let msgContainer = document.querySelector(".msgContainer");
// let msg = document.querySelector("#winner");

// let scoreX = 0;
// let scoreO = 0;
// let scoreDraw = 0;
// let currentPlayer = "X"; // Player X starts
// let gameActive = true;

// const winPatterns = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
// ];

// // Function to check for a winner or a draw
// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
//             showWinner(pos1);
//             return;
//         }
//     }

//     // Check for a draw (if all boxes are filled and no winner)
//     if ([...boxes].every(box => box.innerText !== "")) {
//         msg.innerText = "It's a Draw!";
//         msgContainer.classList.remove("hide");
//         scoreDraw++;
//         document.getElementById("scoreDraw").textContent = scoreDraw;
//         gameActive = false;
//     }
// };

// // Function to update the scoreboard
// function updateScore(winner) {
//     if (winner === 'X') {
//         scoreX++;
//         document.getElementById('scoreX').textContent = scoreX;
//     } else if (winner === 'O') {
//         scoreO++;
//         document.getElementById('scoreO').textContent = scoreO;
//     }
// }

// // Function to display the winner message
// const showWinner = (winner) => {
//     msg.innerText = `Congratulations! Winner: ${winner}`;
//     msgContainer.classList.remove("hide");
//     updateScore(winner); // **FIXED: Now calls updateScore()**
//     gameActive = false;
// };

// // Function to handle box clicks
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (!gameActive || box.innerText !== "") return;

//         box.innerText = currentPlayer;
//         currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player turn
//         checkWinner();
//     });
// });

// // Function to reset the game but keep the scoreboard
// const resetGame = () => {
//     gameActive = true;
//     currentPlayer = "X";
//     boxes.forEach(box => {
//         box.innerText = "";
//     });
//     msgContainer.classList.add("hide");
// };

// // Function to reset everything including the scoreboard
// const newGame = () => {
//     scoreX = 0;
//     scoreO = 0;
//     scoreDraw = 0;
//     document.getElementById("scoreX").textContent = scoreX;
//     document.getElementById("scoreO").textContent = scoreO;
//     document.getElementById("scoreDraw").textContent = scoreDraw;
//     resetGame();
// };

// // Add event listeners to buttons
// resetBtn.addEventListener("click", resetGame);
// newGameBtn.addEventListener("click", newGame);
// --------------------------------------------------------------
// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector(".reset"); // Reset everything (board + score)
// let newGameBtn = document.querySelector(".new-btn"); // Reset only board
// let msgContainer = document.querySelector(".msgContainer");
// let msg = document.querySelector("#winner");

// let scoreX = 0;
// let scoreO = 0;
// let scoreDraw = 0;
// let currentPlayer = "X"; // Player X starts
// let gameActive = true;

// const winPatterns = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
// ];

// // Function to check for a winner or a draw
// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
//             showWinner(pos1);
//             return;
//         }
//     }

//     // Check for a draw (if all boxes are filled and no winner)
//     if ([...boxes].every(box => box.innerText !== "")) {
//         msg.innerText = "It's a Draw!";
//         msgContainer.classList.remove("hide");
//         scoreDraw++;
//         document.getElementById("scoreDraw").textContent = scoreDraw;
//         gameActive = false;
//     }
// };

// // Function to update the scoreboard
// function updateScore(winner) {
//     if (winner === 'X') {
//         scoreX++;
//         document.getElementById('scoreX').textContent = scoreX;
//     } else if (winner === 'O') {
//         scoreO++;
//         document.getElementById('scoreO').textContent = scoreO;
//     }
// }

// // Function to display the winner message
// const showWinner = (winner) => {
//     msg.innerText = `Congratulations! Winner: ${winner}`;
//     msgContainer.classList.remove("hide");
//     updateScore(winner); // **Score updates properly**
//     gameActive = false;
// };

// // Function to handle box clicks
// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (!gameActive || box.innerText !== "") return;

//         box.innerText = currentPlayer;
//         currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch player turn
//         checkWinner();
//     });
// });

// // **New Game Button: Resets only the board, keeps scores**
// const newGame = () => {
//     gameActive = true;
//     currentPlayer = "X";
//     boxes.forEach(box => {
//         box.innerText = "";
//     });
//     msgContainer.classList.add("hide");
// };

// // **Reset Button: Resets everything including the scoreboard**
// const resetGame = () => {
//     scoreX = 0;
//     scoreO = 0;
//     scoreDraw = 0;
//     document.getElementById("scoreX").textContent = scoreX;
//     document.getElementById("scoreO").textContent = scoreO;
//     document.getElementById("scoreDraw").textContent = scoreDraw;
//     newGame(); // Call newGame to reset the board as well
// };

// // Add event listeners to buttons
// resetBtn.addEventListener("click", resetGame);
// newGameBtn.addEventListener("click", newGame);

// const triggerFireworks = () => {
//     let fireworkContainer = document.getElementById("fireworks");
//     fireworkContainer.innerHTML = "";
//     fireworkContainer.style.display = "block";

//     for (let i = 0; i < 15; i++) {
//         let firework = document.createElement("div");
//         firework.classList.add("firework");
//         firework.style.left = `${Math.random() * 100}%`;
//         firework.style.top = `${Math.random() * 100}%`;
//         fireworkContainer.appendChild(firework);
//     }

//     setTimeout(() => {
//         fireworkContainer.style.display = "none";
//     }, 2000);
// }

// --------------------------------------------------------------------------
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset"); 
let newGameBtn = document.querySelector(".new-btn"); 
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#winner");

let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Function to check for a winner or a draw
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        let pos1 = boxes[a].innerText;
        let pos2 = boxes[b].innerText;
        let pos3 = boxes[c].innerText;

        if (pos1 && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
    }

    if ([...boxes].every(box => box.innerText !== "")) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        scoreDraw++;
        document.getElementById("scoreDraw").textContent = scoreDraw;
        gameActive = false;
    }
};

// Function to update the scoreboard
function updateScore(winner) {
    if (winner === 'X') {
        scoreX++;
        document.getElementById('scoreX').textContent = scoreX;
    } else if (winner === 'O') {
        scoreO++;
        document.getElementById('scoreO').textContent = scoreO;
    }
}

// Function to display the winner message
const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Winner: ${winner}🎉`;
    msgContainer.classList.remove("hide");
    updateScore(winner);
    gameActive = false;
    triggerFireworks();
};

// Function to handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameActive || box.innerText !== "") return;

        box.innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        checkWinner();
    });
});

// New Game Button: Resets only the board, keeps scores
const newGame = () => {
    gameActive = true;
    currentPlayer = "X";
    boxes.forEach(box => box.innerText = "");
    msgContainer.classList.add("hide");
};

// Reset Button: Resets everything including the scoreboard
const resetGame = () => {
    scoreX = 0;
    scoreO = 0;
    scoreDraw = 0;
    document.getElementById("scoreX").textContent = scoreX;
    document.getElementById("scoreO").textContent = scoreO;
    document.getElementById("scoreDraw").textContent = scoreDraw;
    newGame();
};

// Add event listeners
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);

// Function to create firework effects
const triggerFireworks = () => {
    let fireworkContainer = document.getElementById("fireworks");
    fireworkContainer.innerHTML = "";
    fireworkContainer.style.display = "block";

    for (let i = 0; i < 15; i++) {
        let firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        fireworkContainer.appendChild(firework);
    }

    setTimeout(() => {
        fireworkContainer.style.display = "none";
    }, 2000);
};
