/* ---------------------------------------------------------------------------
 * Navigation Sub Arrow Function
 * --------------------------------------------------------------------------- */
	jQuery(document).ready(function($) {
		jQuery(".sub-dropdown").parent("li").addClass("parentIcon");
	});

	/* Flex SLider */
	$(window).load(function() {
	  $('.flexslider').flexslider({
	    animation: "slide"
	  });
	});

/* ---------------------------------------------------------------------------
 * Accordian Toggle Function Function
 * --------------------------------------------------------------------------- */
jQuery(document).ready(function(e) {
	jQuery(".cs-pricetable ul").find('li').after( "<li class='cs-lispacer'></li>" );
	$(".table-content").hide();
	jQuery('.cs-pricewrap').eq(0).find('.table-content').show();
	  jQuery('.accordion-panel').bind('click',function(e){
	  	e.preventDefault();
		  if( jQuery(this).parents('.cs-pricewrap').hasClass('up')){
			jQuery(this).parents('.cs-pricewrap').removeClass('up');
			jQuery('.table-content,.table-content').slideUp();
			
		  }else{
			jQuery('.cs-pricewrap').removeClass('up');
			jQuery(this).parents('.cs-pricewrap').addClass('up');
			jQuery('.cs-pricewrap .table-content,.table-content').slideUp();
			jQuery('.cs-pricewrap.up .table-content').slideDown();
		  }
	  });
	  
  });
