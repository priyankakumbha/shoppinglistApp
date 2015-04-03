$(document).ready(function(){
$( "#addItems" ).keypress(function(e) {
  if (e.keyCode == 13) {
  var itemvalue = $("#addItems" ).val();
  console.log( "Handler for .keypress() called." +itemvalue);
  addItemToList(itemvalue);
  $( "#addItems" ).val('');
  }
  

});



$(document).on("click", ".delete", function(){
     console.log( "Handler for .click() called.*****" );
    $(this).closest('#item').fadeOut(300);
});

$(document).on("click", "#button", function(){
     console.log( "Handler for .click() called.*****" );
    $("#item-list").empty();
});

});
function addItemToList(itemvalue) {
	var checkMark = '<span class="right"></span> ';
    var xMark = '<span class="delete"></span>';
    $( "#items" ).prepend( $( "<div id='space'> <li id='item'> "+checkMark+itemvalue+ xMark+" </li> </div>") );
   
       
    }