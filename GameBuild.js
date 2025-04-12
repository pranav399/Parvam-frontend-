let userscore = 0;
let compscore = 0;

const gencompchoice = () =>{
    let options = ["rock","paper","scissor"];
    const random = Math.floor(Math.random() * 3)/*random-generates random numbers within specified range
    floor-removes the decimal values*/
    console.log("random ",random);
    return options[random];
}

const gamedraw = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw..Play Again"
}

const showwin = (userwin, userchoice, compchoice) =>{
    if(userwin){
        userscore++;
        userscorepar.innerText = userscore;
        console.log("You win");
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = 'green'
    }
    else{
        compscore++;
        compscorepar.innerText = compscore;
        console.log("You lose");
        msg.innerText = `You lose! ${compchoice} beats Your ${userchoice}`
        msg.style.backgroundColor = 'red'
    }
    
}

const userscorepar = document.querySelector('#user');
const compscorepar = document.querySelector('#comp');


const msg = document.querySelector('#msg');

const choices = document.querySelectorAll('.choice');

const playgame = (userchoice) =>{
    // console.log("user choice", userchoice);
    const compchoice = gencompchoice();
    // console.log("comp choice", compchoice);

    if(userchoice === compchoice){
        gamedraw();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwin(userwin, userchoice, compchoice);
    }

}
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        // console.log('choice was clicked', userchoice);
        playgame(userchoice);
    })
})