jQuery("document").ready(function($){
 
	var nav = $('.nav-container');
 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 136) {
			nav.addClass("f-nav");
            nav.addClass("nav-container-fixed");
            $('#dulogo').attr('src', 'images/logo-mini-2.png');
            $('#dulogo').attr('height', '50px');
            $('#navbarNavAltMarkup').addClass("navbarNavAltMarkup-fixed");
		} else {
			nav.removeClass("f-nav");
            nav.removeClass("nav-container-fixed");
            $('#dulogo').attr('src', 'images/logo.png');
            $('#dulogo').attr('height', '80px');
            $('#navbarNavAltMarkup').removeClass("navbarNavAltMarkup-fixed");
		}
	});
 
});



