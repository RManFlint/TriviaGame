

function RamonesQuestion(quesR, ansR1, ansR2, ansR3, ansR4, corrNum) {
	this.questionRamones= quesR,
	this.answers=[
        ansR1,
        ansR2,
        ansR3,
		ansR4	
	],   
    this.correctNum=corrNum
} 
var question1 = new RamonesQuestion("What was Dee Dee's real name?", "Dietrich Gunther", "Douglas Colvin", "David Jones", "Ronald Trump", 1);
var question2 = new RamonesQuestion("What NY punk bar launched the Ramones' career?", "CBGB's", "Heebie Jeebie's", "JuJubes", "Applebee's", 0);
var question3 = new RamonesQuestion("What bar in KC did the Ramones play in January 1978?", "One Block West", "The Merry-Go-Round", "Jimmy's Jigger", "Your Momma's Basement", 0);
var question4 = new RamonesQuestion("Who replaced Tommy Ramone as the drummer?", "Eddie Ramone", "Vincey Ramone", "Marky Ramone", "Debbie Ramone", 3);
var question5 = new RamonesQuestion("What was Dee Dee's real name?", "Dietrich Gunther", "Douglas Colvin", "David Jones", "Ronald Trump", 1);
/*console.log(question1.questionRamones)

$(".questionDiv").text(question1.questionRamones);
*/
var ramonesArray = [question1, question2, question3, question4, question5];
/*console.log(ramonesArray[0].answers[0]);*/

var quesCount = 0; 
function quizLoad(){
	$(".questionDiv").text(ramonesArray[quesCount].questionRamones);
	$("#answer0").text(ramonesArray[quesCount].answers[0]);
	$("#answer1").text(ramonesArray[quesCount].answers[1]);
	$("#answer2").text(ramonesArray[quesCount].answers[2]);
	$("#answer3").text(ramonesArray[quesCount].answers[3]);

}
 quizLoad();
/*

function wordLoad() 
	{
	wordGuessArray.length=0;
	$("playerGuess").disabled = false;
	hangWord = $("hangWord").value;
	
	if (hangWord.search(/[^a-z]/i) !==-1 || hangWord.length > 12 )
		{
		alert("Enter only letters. Make sure the word is only twelve letters");
		return;
		} 
	else	
		{
		hangWord = hangWord.toLowerCase();
		hangWordArray = hangWord.split("");
		$("hangWord").value = "";
		}
	
	/*Note this is a no space, not an empty space. An empty space 
	will leave a blank at the beginning of the string.  
	for (var i=0; i < hangWord.length; i++) 
		{
		wordGuessArray[i] = "__ ";
		}		
	$("trueLetters").firstChild.nodeValue = wordGuessArray.join("");
	$("playerGuess").focus();
	$("playerGuess").value = "";

	}
	
	function lGuess() 
	{
	var leftGuess;
	lGuess = $("playerGuess").value;
	console.log("Hangword in lgues is " + hangWord);
	if(hangWord.length < 7){
		leftGuess = hangWord.length;
	}
	else{
		leftGuess = 7;
	}

	
	if (lGuess.search(/[^a-z]/i) !==-1 || lGuess.length > 1 || wrongGuess.indexOf(lGuess)> -1)
		{
		alert("Enter one letter or you've already entered that letter");
		}		
	else 
		{
		lGuess = lGuess.toLowerCase();
		}
	var indices = [];
	for (var k = 0; k < hangWordArray.length; k++)
		{
		if (hangWordArray[k] === lGuess) 
			{
			indices.push(k);
			indexLength++;	
			console.log("indexLength is " + indexLength);		
			}
		}
		if (hangWordArray.indexOf(lGuess)===-1)
			{
			falseCount++;
			falseMsg = "Prisoner, you have " + falseCount +" wrong guesses." + (leftGuess - falseCount) + " guesses until you swing!";
			$("falseLetters").firstChild.nodeValue = falseMsg;
			wrongGuess.push(lGuess);
			console.log("wrongGuess join is " + wrongGuess.join());
			console.log("wrongGuess length is " + wrongGuess.length);
			$("wrongGuess").firstChild.nodeValue = "You have guessed " + wrongGuess.join(", ");
			console.log("wrongGuess is " +wrongGuess);
					}
	for (var l=0; l<indices.length; l++)
		{
		var m = indices[l];
		wordGuessArray[m]= lGuess;
		$("trueLetters").firstChild.nodeValue = wordGuessArray.join(" ");
		console.log("indices length is " + indices.length);
		}
	if (falseCount===leftGuess){
		$("falseLetters").firstChild.nodeValue = "To the tumbril, Prisoner!  Where shall we send the corpse?";
		$("falseLetters").setAttribute("class", "red")
		$("playerGuess").disabled = true;
		wordGuessArray.length = 0;
		indices.length=0;
		falseCount = 0;
		indexLength=0;
		wrongGuess.length=0;
		$("wrongGuess").firstChild.nodeValue = "";
		$("trueLetters").firstChild.nodeValue = "";
	}
	
	if (hangWord.length === indexLength){
		playerWins++;
		$("falseLetters").firstChild.nodeValue = "You have evaded the hangman for today, Prisoner!  Win five in a row and gain your freedom!";
		console.log("playerWins are " + playerWins);
		$("playerWins").firstChild.nodeValue = "You have won " + playerWins + " games.  Win " + parseInt(5-playerWins) + " games and you are free!" ;
		$("falseLetters").setAttribute("class", "blue")
		$("playerGuess").disabled = true;
		wordGuessArray.length = 0;
		indices.length=0;
		falseCount = 0;
		indexLength=0;
		wrongGuess.length=0;
		$("wrongGuess").firstChild.nodeValue = "";
		$("trueLetters").firstChild.nodeValue = "";
	}

	if (playerWins >= 5){
		$("falseLetters").firstChild.nodeValue = "You have gained your freedom, Prisoner!  Be gone and be damned!";
		$("playerWins").firstChild.nodeValue = "";
		$("trueLetters").firstChild.nodeValue = "";
		
	}
	
	$("playerGuess").value = "";
	$("playerGuess").focus();
 	}

window.onload =  function()
	{
		$("wordSubmit").onclick = wordLoad;
		$("letterSubmit").onclick = lGuess;	
	}
*/
