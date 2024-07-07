let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset-btn");
let turnX= true;
let Announce = document.querySelector(".winner");
const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [4,5,6],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("The box is clicked");
        if(turnX==true){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled= true;
        winCheck();
    })
})
reset.addEventListener("click",(box)=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        Announce.classList.add("hide");
    })
})
const msg=(pos1Val)=>{
    Announce.innerText=`Congratulations,Winner is ${pos1Val}`;
    Announce.classList.remove("hide");
}

let winCheck = ()=>{
    for(let pattern of winPatterns ){
        // console.log(pattern[0],pattern[1],pattern[2]);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                msg(pos1Val);
            }
        }
    }
}