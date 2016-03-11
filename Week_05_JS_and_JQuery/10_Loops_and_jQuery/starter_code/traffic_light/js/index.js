//Implement the red light using jQuery. Don't forget to add the script tags.

$(document).ready(function() {

	function turnOffLights(){
		$(".bulb").css("background-color", "black");
	}

	$("#stopButton").click(function(){
		turnOffLights();
		$("#stopLight").css("background-color", "red");
		// $("#slowLight").css("background-color", "black");
		// $("#goLight").css("background-color", "black");
	});

	$("#slowButton").click(function(){
		turnOffLights();
		$("#slowLight").css("background-color", "yellow");
	});

	$("#goButton").click(function(){
		turnOffLights();
		$("#goLight").css("background-color", "green");
	});
});