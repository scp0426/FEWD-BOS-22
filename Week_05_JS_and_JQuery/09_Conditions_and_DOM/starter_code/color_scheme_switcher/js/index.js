// document.getElementById('grayButton').onclick = switchGray;
$('#grayButton').click(function(){
	switchGray();
})

// document.getElementById('whiteButton').onclick = switchWhite;
$('#whiteButton').click(function(){
	switchWhite();
})

function switchGray() {
  // document.body.style.backgroundColor = 'gray';
	$("body.main").css("background-color", "gray");

  // document.body.style.color = 'white';
  $("body").css("color", "white");

}

function switchWhite() {
  // document.body.style.backgroundColor = 'white';
	$("body").css("background-color", "white");
  // document.body.style.color = 'black';
  $("body").css("color", "black");
}
