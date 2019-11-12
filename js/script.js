let output = document.getElementById('output');

let questionNumber = 0;				//SETTING THE QUESTION NUMBER TO ZERO
let input = document.getElementById('input');



let question = '<h1>Hi,my name is JARVIS.What is your name?</h1>';

output.innerHTML = question;

const bot =()=>{
		
		if (questionNumber == 0){
			output.innerHTML ='<h1>...</h1>';

			setTimeout(()=>{timedQuestion()}, 2000); 			//TIME DELAY BEFORE THE BOT DISPLAYS THE NEXT QUESTION

			question = `<h1>Hello ${input.value}.do you like this webapp? (yes/no)</h1>`;
			input.value = '';





	}else if(questionNumber == 1){
		if(input.value.toLowerCase() == "yes".toLowerCase()){
			output.innerHTML ='<h1>...</h1>';
			setTimeout(()=>{timedQuestion()}, 2000);
		question = `<h1>Thanks.Glad i met your expectations </h1>`;
			input.value = '';
		}else if(input.value.toLowerCase() == "no".toLowerCase()){
			output.innerHTML ='<h1>...</h1>';									
			setTimeout(()=>{timedQuestion()}, 2000);
			question = `<h1>Thanks.I will work more to ensure a better experience for you</h1>`;
			input.value = '';

		}

	}
}



input.addEventListener("keypress", (e)=>{
	if(e.keyCode == 13){
		bot();
		questionNumber++;  //TAKES NOTE OF HOW MANY TIMES THE ENTER KEY IS USED
	}
})



const timedQuestion =()=>{
	output.innerHTML = question;
}


