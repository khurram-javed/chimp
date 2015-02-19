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
	});