function clearLight(){

  $(".bulb").css( "background-color", "black");


  // document.getElementById("slowLight").style.backgroundColor = "black";
  // document.getElementById("goLight").style.backgroundColor = "black";
  // document.getElementById("stopLight").style.backgroundColor = "black";
}

// turn on stop function 
function turnOnStopLight(){
	if (document.getElementById("stopLight").style.backgroundColor === "red"){
		clearLight();
	} else {
		clearLight();
  	document.getElementById("stopLight").style.backgroundColor = "red";
	}

}

// turn on slow function
function turnOnSlowLight(){
    clearLight();
  document.getElementById("slowLight").style.backgroundColor = "yellow";
}

// turn on go function
function turnOnGoLight(){
    clearLight();
  document.getElementById("goLight").style.backgroundColor = "green";
}

// set stop light click event
document.getElementById("stopButton").onclick = turnOnStopLight;

// set slow light click event
document.getElementById("slowButton").onclick = turnOnSlowLight;

// set go light click event
document.getElementById("goButton").onclick = turnOnGoLight;




