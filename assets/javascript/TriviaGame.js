$("#startButton").on("click", function(){
	quizLoad();
//	setTimeout()
})

function RamonesQuestion(quesR, ansR1, ansR2, ansR3, ansR4, corrNum) {	
	return {
		questionRamones: quesR,
		answers: [
			ansR1,
			ansR2,
			ansR3,
			ansR4	
		],   
		correctNum:corrNum
	};
} 
var question1 = RamonesQuestion("What was Dee Dee's real name?", "Dietrich Gunther", "Douglas Colvin", "David Jones", "Ronald Trump", "answer1"); 
var question2 = RamonesQuestion("What NY punk bar launched the Ramones' career?", "CBGB's", "Heebie Jeebie's", "JuJubes", "Applebee's", "answer0");
var question3 = RamonesQuestion("What bar in KC did the Ramones play in January 1978?", "One Block West", "The Merry-Go-Round", "Jimmy's Jigger", "Your Momma's Basement", "answer0");
var question4 = RamonesQuestion("Who replaced Tommy Ramone as the drummer?", "Eddie Ramone", "Vincey Ramone", "Marky Ramone", "Debbie Ramone", "answer2");
var question5 = RamonesQuestion("What was Joey's real name?", "Jeffrey Hyman", "Joel Eisenberg", "Joe Manelli", "Abe Schicklgruber", "answer0");
var question6 = RamonesQuestion("What area of Queens were the Ramones from?", "LaGuardia Gardens", "The Heights", "Forest Hills", "Raymore-Peculiar", "answer2");
var question7 = RamonesQuestion("What weapon does the eagle hold in its talons on the Ramones logo?", "baseball bat", "switchblade", "a stick of dynamite", "A picture of Rosie O'Donnell naked", "answer0");
console.log(question1.questionRamones)

//$(".questionDiv").text(question1.questionRamones);

var ramonesArray = [question1, question2, question3, question4, question5, question6, question7];
/*console.log(ramonesArray[0].answers[0]);*/

var quesCount = 0;
function quizLoad(){
	//I HAVEN'T TESTED THE FOR LOOP. IT'S HERE TO LOOP THROUGH THE 
	//ARRAY AND ITERATE THE QUESTIONS
	//
	for (i=0; i < ramonesArray.length;i++) 	{
	$(".questionDiv").text(ramonesArray[quesCount].questionRamones);
	$("#answer0").text(ramonesArray[quesCount].answers[0]);
	$("#answer1").text(ramonesArray[quesCount].answers[1]);
	$("#answer2").text(ramonesArray[quesCount].answers[2]);
	$("#answer3").text(ramonesArray[quesCount].answers[3]);}
//THIS REMAINS THE FIRST OBJECT BECAUSE quesCount REMAINS ZERO. 
}
 
$(".answers").on("click", function(){
	console.log ("This.id is " + $(this).attr("id"));
	console.log ("ramonesArray[quesCount].corrNum is " + ramonesArray[quesCount].correctNum);
	console.log($(this).attr("id") === ramonesArray[quesCount].correctNum);
	if ($(this).attr("id") === ramonesArray[quesCount].correctNum){
		$("#quesResultH3").text("GABBA GABBA HEY! You Got It Right!");
	} else{
		console.log("The else loop is working");
		$("#quesResultH3").text("Have you been sniffing glue?  How can you not know that?");
	}
	quesCount++;
	console.log("quesCount is " + quesCount);

	if (quesCount < 7){
		console.log("INside the if statement, QuesCount is " +quesCount);
		$("#nextQues").on("click", function() {
			quizLoad();
		})}
		
	})
 //quizLoad();

