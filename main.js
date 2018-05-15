$(document).ready(function(){
  	$('.switchbtn').click(function(){
		$(this).toggleClass("switchon");
     	let countOne = $('#one .switchon').length;
    	$( "#one .button_active" ).html(function() {
    		return countOne + " ACTIVE";
    	});
    	$( "#one .button_disabled" ).html(function() {
    		return  $('#one .switchbtn').length - countOne + " disabled";
    	});
    	let countTwo = $('#second .switchon').length;
    	$( "#second .button_active" ).html(function() {
    		return countTwo + " ACTIVE";
    	});
    	$( "#second .button_disabled" ).html(function() {
    		return $('#second .switchbtn').length - countTwo + " disabled";
    	});
    	
	});
	
	
 
	
  

});