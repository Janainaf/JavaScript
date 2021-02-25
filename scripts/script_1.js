



$(document).ready(function() {
	let name = "";
	while(name == "") {
	  name = prompt("Quel est ton prénom ?");
	}
	let output = `Bonjour, ${name} !!`
	console.log(output);

	  $('#result0').html(output);
});

