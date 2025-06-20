let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");

let turnO= true;//playerX playerY
//2D array
let winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcon.classList.add("hide");
    
};

let count=0;

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        // console.log("box was clicked");
       
        if(turnO){
            box.innerText='O';
            turnO=false;
            count++;
        }
        else{
            box.innerText='X';
            turnO=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
        
     });
     
});


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const drawmsg=()=>{
    msg.innerText="match is draw";
    msgcon.classList.remove("hide");
    disableBoxes();
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableBoxes();
};

const checkwinner=()=>{
    for( let patterns of winpatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText, 
        // boxes[patterns[1]].innerText, 
        // boxes[patterns[2]].innerText);
        let posval1=boxes[patterns[0]].innerText;
        let posval2=boxes[patterns[1]].innerText;
        let posval3=boxes[patterns[2]].innerText;

        if(posval1!=="" && posval2!=="" && posval3!==""){
            if(posval1===posval2 && posval2===posval3  ){
                console.log("winner",posval1);
                showWinner(posval1);
                return;
             }
            //  else if(posval1===posval2 && posval2===posval3 && count==9 ){
            //     showWinner(posval1);
            // }
            // else if( count===9){
            //     drawmsg();
            // }
        }
    }
    if(count===9){
        drawmsg();
    }
};

// const checkDraw=()=>{
//     if(count===9 )
// }

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

//their is a bug ki agr last me patterns bnte hai vo bhi primary diagonal(0,4,8) me hi 
// tb hi winner ke jagah match draw bol deta hai


