$(function(){

	 baguetteBox.run('.gallery');


	 $(window).scroll(function() {
	 	if ($(this).scrollTop() > 300) {
	 		$('.scrollToTop').fadeIn();
	 	} else {
	 		$('.scrollToTop').fadeOut();
	 	}
	 });

	 $('.scrollToTop').click(function(){
	 	document.animate({scrollTop:0} ,800);
	 	return false;
	 });
})