/* ---------------------------------------------------------------------------
 * Navigation Sub Arrow Function
 * --------------------------------------------------------------------------- */
	jQuery(document).ready(function($) {
		jQuery(".sub-dropdown").parent("li").addClass("parentIcon");

		//Search Select Add icon
		jQuery('.SumoSelect').find('i').hide();
		jQuery('.sidebar-search .SumoSelect').on('click', '.options li', function(e){
			// var val = jQuery(this).find('label').html();
			var disabled = jQuery(this).hasClass('disabled');
			if(!disabled){
				jQuery(this).parents('.SumoSelect').find('i').show();
			}else{
				jQuery(this).parents('.SumoSelect').find('i').hide();
			}
		});

		//Phone Number Hide and Show
		jQuery('.agentdetail-info .right-info').on('click', 'p a', function(e){
			e.preventDefault();

			var val = jQuery(this).siblings('span').attr('data-phone');
			jQuery(this).siblings('span').html(val);
			
		});
	});