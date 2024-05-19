var button = document.querySelector("button");
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
      box.style.backgroundColor="#550000";
      box.style.boxShadow="0 6px 8px rgba(0, 0, 0, 0.2)";
      setTimeout(()=>{

    
       if(turn0){
        box.style.color="#FFFFFF";
        box.style.backgroundColor="#330000";
        box.innerHTML="O";
        turn0=false;
        draw++; 
       }
       else{
        box.style.color="black";
        box.style.backgroundColor="white";
        box.innerHTML="X";
        turn0=true;
        draw++; 
       }
   
       box.disabled=true;
       checkWinner();
       if(draw === 9){
        gameDraw();
    }
},100);
     
    });
});
const gameDraw=()=>{
    msg.innerText=`Game was Draw `;
    msgContainer.classList.remove("hide");
    disableBtn();
    draw=0;
}
resetBtn.addEventListener("click",()=>{
    resetBtn.style.backgroundColor="#e0e0e0";
    resetBtn.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.2)";
    setTimeout(()=>{
        resetBtn.style.backgroundColor="#ffffff";
    },100);
    boxes.forEach((box)=>{
        box.style.backgroundColor="#330000";
        box.innerHTML=" ";
        box.disabled=false;
    })
    turn0=true;
    draw=0;
})
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    draw=0;
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
        box.style.backgroundColor="#330000";
        box.innerHTML=" ";
        box.disabled=false;
    })
    msgContainer.classList.add("hide");
    turn0=true;
    draw=0;
})


 
