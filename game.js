var userrock = document.getElementById("rock");
var userpaper = document.getElementById("paper");
var usersis = document.getElementById("scissor");
var result = document.getElementById('result');
var userscore = 0;
var compscore = 0;
var userchoice = '';


function compchoice() {
    var random = Math.floor(Math.random()*3); // this function is for choosing a random choice for computer
    var comp_choice = ['r','p','s'];
    return comp_choice[random];
}

function win() {
    userscore+= 1;
    document.getElementById('user').innerHTML = userscore; // score update if you win 
}
function lose() {
    compscore+= 1;
    document.getElementById('comp').innerHTML = compscore; // score update if you lose
}
/**************************************************
events generated  as you click on Icons i.e. Your choice in game*/
    userrock.addEventListener('click',function() {   
       userchoice = 'r';
		 main();
    })

    userpaper.addEventListener('click',function() {
       userchoice = 'p';
		 main();
    })

    usersis.addEventListener('click',function() {
       userchoice = 's';
		 main();
    })
/************************************************************************
This is the main function function which decides the game result*/

function main(){
	switch(userchoice+compchoice()){
		case 'rs':
			win();
			document.getElementById('result').innerHTML = '<b>ROCK</b><i><sub>user</sub></i> beats <i>SCISSOR</i><b><sub>comp</sub></b> , You win!!';
			break;
		case 'pr':
			win();
			document.getElementById('result').innerHTML = '<b>PAPER</b><i><sub>user</sub></i> beats <i>ROCK</i><b><sub>comp</sub></b> , You win!!';
			break;
		case 'sp':
			win();
			document.getElementById('result').innerHTML = '<b>SCISSOR</b><i><sub>user</sub></i> beats <i>PAPER</i><b><sub>comp</sub></b> , You win!!';
			break;
		case 'rp':
			lose();
			document.getElementById('result').innerHTML = '<b>PAPER</b><i><sub>comp</sub></i> beats <i>ROCK</i><b><sub>user</sub></b> , You Lose (:';
			break;
		case 'ps':
			lose();
			document.getElementById('result').innerHTML = '<b>SCISSOR</b><i><sub>comp</sub></i> beats <i>PAPER</i><b><sub>user</sub></b> , You Lose (:';
			break;
		case 'sr':
			lose();
			document.getElementById('result').innerHTML = '<b>ROCK</b><i><sub>comp</sub></i> beats <i>SCISSOR</i><b><sub>user</sub></b> , You Lose (:';
			break;
		default:
			document.getElementById('result').innerHTML = 'Its a Draw ';
			break;
	}
}
/* *****************************************************************
To reset the scoreboard*/
function reset(){
	userscore = 0;
	compscore = 0;
	document.getElementById('user').innerHTML=0;
	document.getElementById('comp').innerHTML=0;
	document.getElementById('result').innerHTML = '';
}