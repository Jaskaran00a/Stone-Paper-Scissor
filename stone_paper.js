let userscore =0;
let compscore = 0;
const userscorepara = document.querySelector("#user-score")  
const compscorepara = document.querySelector("#comp-score")

const choices = document.querySelectorAll(".choice"); //img 1
const msg = document.querySelector("#msg");


const getcompchoice  = ()=>{
    const option =[ "stone", "paper","scissors"];
   const randomidx =  Math.floor(Math.random()*3);
   return option[randomidx];
};

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `you win !your ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("computer win");
        msg.innerText = `you lose !${userchoice} beat your ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
}



const Playgame = (userchoice)=>{
    console.log("user choice is = ",userchoice)
    const compchoice = getcompchoice();
    console.log("comp choice is = ",compchoice);
    
    if(userchoice === compchoice){
        console.log("game was draw");
        msg.innerText="Game was draw";
        msg.style.backgroundColor = "#351431";
    }else{
        let userwin = true;
       if(userchoice === "stone"){
        // scissors , paper
        userwin = compchoice === "paper" ? false : true;
       } else if(userchoice === "paper"){
        //  stone,scissors 
        userwin = compchoice === "scissors" ? false : true;
       }  else{
        //  stone,paper 
        userwin = compchoice === "stone" ? false : true;
       }  
       showwinner(userwin, userchoice,compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        Playgame(userchoice);
    });
});