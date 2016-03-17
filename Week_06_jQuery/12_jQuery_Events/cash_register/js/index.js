var total = 0;

$('#entry').submit(function(e){
	e.preventDefault();
	addEntry();
});

function addEntry() {
  var entry = $('#newEntry').val();
  entry = parseFloat(entry);

  var formattedEntry = currencyFormat(entry);

  $('#entries').append('<tr><td></td><td>' + formattedEntry + '</td></tr>');


  total += entry;
  var formattedTotal = currencyFormat(total);  
  $('#total').text(formattedTotal);
  
  $('#newEntry').val('');
}

function currencyFormat(number) {
  number = number.toFixed(2);
  number = '$' + number;
  return number;
}