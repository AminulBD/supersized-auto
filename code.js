jQuery(function($){
	"use strict";
	/**
	 * This is automatic addon for Supersized.js
	 *
	 * @author Aminul Islam <me@aminul.net>
	 *
	 * @required Supersized.js 3.2.7
	 */
	
	// Configurtion.
	var $configurtion = {};
	
	var $sS = $('[data-supersized]');

	$sS.each(function() {
		// Prepare
		var $this 	= $(this);
		var $item 	= $(this).find('.item');
		var $slides = [];

		// Push to conf
		$configurtion.slide_interval 		= $this.data('slide-interval'); // Length between transitions
		$configurtion.transition 			= $this.data('transition'); // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		$configurtion.transition_speed 		= $this.data('transition-speed'); // Speed of transition
		$configurtion.slide_links			= $this.data('slide-links'); // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		$configurtion.slides 				= $slides;

		$item.each(function() {
			var $data = {};
			$slides.push($data);

			$data.image = $(this).data('src');
			$data.thumb = $(this).data('thumb');
			$data.name 	= $(this).data('name');
			$data.url	= $(this).data('url');
			$data.title = $(this).contents();
		});
	});


	// console.log($configurtion);
	$.supersized($configurtion);

});