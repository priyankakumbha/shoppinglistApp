$(document).ready(function(){
   if ($("#item").is(':empty')){
      console.log("list is empty");
    $("#button").hide();
}
$( "#addItems" ).keypress(function(e) {
  if (e.keyCode == 13) {
  var itemvalue = $("#addItems" ).val();
  
  addItemToList(itemvalue);
  $("#addItems").val('');
 $("#button").show();
  }

});



$(document).on("click", ".delete", function(){
    
    $(this).closest('#item').fadeOut(300);

});

$(document).on("click", "#button", function(){
     
    $("#items").empty();
    $("#button").hide();
});
$(document).on("click", ".right", function(){
    
       
        $(this).closest('#item').addClass("strikethrough");

});

});
function addItemToList(itemvalue) {
	var checkMark = '<span class="right"></span> ';
    var xMark = '<span class="delete"></span>';
    $( "#items" ).prepend( $( "<div id='space'> <li id='item'> "+checkMark+itemvalue+ xMark+" </li> </div>") );
   
       
    }