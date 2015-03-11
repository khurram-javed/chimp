/* ---------------------------------------------------------------------------
 * Navigation Sub Arrow Function
 * --------------------------------------------------------------------------- */
	jQuery(document).ready(function($) {
		jQuery(".sub-dropdown").parent("li").addClass("parentIcon");
	});

	$('#copyright').on('click','.btn-top', function(e){
        e.preventDefault();
        var clickedItem = $(this).attr("href");
        if(clickedItem == '#'){
        	var Xpos = 0;
        }else{
        	var Xpos = $(clickedItem).offset().top - 320;
    	}

        $('html, body').animate({ scrollTop: Xpos }, 800);
	 });