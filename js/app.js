$(document).ready(function(){
$( "#addItems" ).keypress(function(e) {
  if (e.keyCode == 13) {
  var itemvalue = $("#addItems" ).val();
  if(itemvalue!= null && itemvalue!=""){
    $("#errorMessage").text(""); 
    //Do not add item if already exist
    if (! $('#items li:contains("' + itemvalue + '")').length) {
    addItemToList(itemvalue);
    $("#addItems").val('');
    $("#button").show();
    }
    else{
      $("#errorMessage").html("<h3> Item already exist</h3>");
      $("#addItems").val('');
    }
  }

  }

});

$(document).on("click", ".delete", function(){    
    $(this).closest('#item').fadeOut(300); 
    $(this).closest('#item').remove();
    if($("#item").children().length==0){
    $("#button").hide();
    }
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