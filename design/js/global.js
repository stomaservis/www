(function ($) {
    $(document).ready(function () {
        $( "#menu-btn" ).click(function() {
            $( this ).parent().find('#menu').slideToggle();
            $( this ).toggleClass('is-active');
        });

        $('.expand h2.expand-title').click(function(){
	  	  $(this).toggleClass('expanded');
	  	  $(this).parent().find('.expand-body').slideToggle();
	  	});
    });
})(jQuery);