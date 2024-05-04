let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let draw=0;
let turn0=true;//playerX,player0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       draw++; 
       if(turn0){
        box.innerHTML="O";
        turn0=false;
       }
       else{
        box.innerHTML="X";
        turn0=true;
       }
       box.disabled=true;
       checkWinner();
       if(draw === 9){
       gameDraw()
       }
    });
});
const gameDraw=()=>{
    msg.innerText=`Game was Draw`;
    msgContainer.classList.remove("hide");
    disableBtn();
}
resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML=" ";
        box.disabled=false;
    })
    turn0=true;
})
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtn();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        if(posVal1!=""  &&  posVal2!=""  &&  posVal3!=""){
            if(posVal1 === posVal2 &&posVal2 === posVal3){
               showWinner(posVal1);
            }
        }
    }
}
newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML=" ";
        box.disabled=false;
    })
    msgContainer.classList.add("hide");
    turn0=true;
})

 
