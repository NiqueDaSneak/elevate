	$(document).ready(function() {
		$menuLeft = $('.pushmenu-left');
		$nav_list = $('#nav-icon2');
		
		$nav_list.click(function() {
			// $(this).toggleClass('active');
			$menuLeft.toggleClass('pushmenu-open');
		});

	});