$(document).ready(function(){

	$('.logo').animate({'opacity': 1}, 1500);


	// menu button toggling
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});

	$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

	};

	$(window).scroll(function() {
		$('.lazyload').each(function() {
				// debugger
			if ($(this).isOnScreen()) {
				$(this).addClass('lazyloaded');
			}

			// if($(this).isOnScreen == false) {
			// 	$(this).removeClass('lazyloaded');
			// }
			
		});
		
	});

});