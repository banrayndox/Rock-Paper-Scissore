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
function autoReset(){ setTimeout(()=>{
   
    userPoint=0;
    pcPoint=0;
    user.innerText="0";
    pc.innerText="0";
  lastText.innerText="Game reseted";

},2000)};


let choices = document.querySelectorAll(".choice");



const pcChoice = () => {
let pattern = ["rock", "paper", "scissore"];
let idx = Math.floor(Math.random() * 3);


let pat = pattern[idx];
let selectId = document.getElementById(pat);


 return pattern[idx];



};
let checkWinner = (userwin, userValue, pcValue) =>{ 
    if (userPoint >= 5 || pcPoint >= 5) return;

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
 
   if(userPoint === 5
    || pcPoint === 5){   
         if (userPoint<=5){
        let diff = userPoint - pcPoint;
        lastText.innerText = `After 5round, Your beat Pc by ${diff} move. Game will restart after 2sec`;
        lastText.style.color = "green";

    }
   
    if (pcPoint===5){
        let diff = pcPoint - userPoint;
        lastText.innerText = `After 5round, Pc beat you by ${diff} move. Game Will Restart after 2sec`;
        lastText.style.color = "red"; }
        autoReset();
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
}

