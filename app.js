let userPoint = 0;
let pcPoint = 0;

let user = document.querySelector(".pu");
let pc = document.querySelector(".pp");
let lastText = document.querySelector("marque");
let button = document.querySelector("button");

button.onclick=()=>{
   
    userPoint=0;
    pcPoint=0;
    user.innerText="0";
    pc.innerText="0";
    lastText.innerText = "Game will Start Again.";
    lastText.style.color = "cadetblue"
}


let choices = document.querySelectorAll(".choice");



const pcChoice = () => {
let pattern = ["rock", "paper", "scissore"];
let idx = Math.floor(Math.random() * 3);


let pat = pattern[idx];
let selectId = document.getElementById(pat);


 return pattern[idx];



};
let checkWinner = (userwin, userValue, pcValue) =>{
   if(userwin){
    
    userPoint++;
    user.innerText = userPoint;
    lastText.innerText = `Your ${userValue} defeated ${pcValue}`;
    lastText.style.color = "green";
   }
   else{
  
    pcPoint++;
    pc.innerText = pcPoint; 
     lastText.innerText = `${pcValue} defeated Your ${userValue}`;
     lastText.style.color = "red";

   }

}

choices.forEach((choice)=>{
    choice.addEventListener(("click"), ()=>
    {
    let userValue = choice.getAttribute("id");
   playGame(userValue);
    })
})

const playGame = (userValue) =>{
    const pcValue = pcChoice();
if(pcValue === userValue){ 

 lastText.innerText = `Game has been Drawed. Both was selected ${pcValue}`;
 lastText.style.color = "black";
}
else{
let userwin = Boolean;
if(userValue==="paper"){
    userwin = pcValue == "scissore" ? false : true;
}
else if (userValue==="rock"){
    userWin = pcValue == "paper" ? false : true;
}
else if(userValue==="scissore"){
    userwin = pcValue == "rock" ? false : true;
}
checkWinner(userwin, userValue, pcValue);
}
};
