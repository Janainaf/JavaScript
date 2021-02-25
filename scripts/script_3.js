$(document).ready(function() {
	function htmlPyramid(size,n) {
		consoleOutput += "\n"
		for(let i=0; i < n; i++){
		    consoleOutput += " ";
		}
		for(let i=n; i < size; i++){
			consoleOutput += "#";
		}
		if(n > 0){
			htmlPyramid(size,n-1);
		}
	}

	let input = 0;
	while(input <= 1) {
	  input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
	}
	
	
	var consoleOutput =  `Voici ta pyramide de ${input} etages:`;
	htmlPyramid(input,input);

		
	let html = consoleOutput;
	for(let i=0; i <= input; i++){
		html = html.replace("\n","<br />")
	}
	$('#result').html(html);
});
