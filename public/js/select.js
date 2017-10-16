window.onload = function() {

	$(document).ready(function(){
	    $('[data-toggle="tooltip"]').tooltip();   
	});

  $('#viewImg').on('click', function () {
    var $btn = $(this).button('loading')
    // business logic...
    $("#outer-container").empty();
    var fieldContent = $("#fotos-toview").val().split(' ');
    for (var i=0; i < fieldContent.length; i++) {
    	$("#outer-container").append('<a href="../views/' + fieldContent[i] + '.html" data-toggle="tooltip" title="' + fieldContent[i] + '"><img src="../img/' + fieldContent[i] + '.jpg"></a>');
    };
    $btn.button('reset')
  })

}