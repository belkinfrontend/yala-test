$(document).ready(function() {
	$('#go').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
				$('#modal_form') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
		});
	});
	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '50%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
    
    
    $('#go_order').click( function(event){
		event.preventDefault();
		$('#overlay_2').fadeIn(400,
		 	function(){
				$('#modal_form_2') 
					.css('display', 'block')
					.animate({opacity: 1, top: '50%'}, 200);
                $('#modal_form') 
					.css('display', 'none')
		});
        $('#overlay_2').fadeIn(400,
		 	function(){
				$('#overlay').css('display', 'none');
		});
	});
	$('#modal_close_2, #overlay_2').click( function(){
		$('#modal_form_2')
			.animate({opacity: 0, top: '50%'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#overlay_2').fadeOut(400);
				}
			);
	});
});