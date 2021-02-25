$(document).ready(function() {
	function factorial(n) {
	  return (n != 1) ? n * factorial(n - 1) : 1;
	}

	let number = -1;
	while(number < 0) {
	  number = prompt("De quel nombre veux-tu calculer la factorielle?");
	}
	let output =  "Le résultat est : " + factorial(number);
	console.log(output);
	  $('#result12').html(output);
});
