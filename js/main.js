$(document).ready(function(){
	var icon = $('#icon'),
		marker = $('#marker');

	$('.wrapper').on('mouseenter', function () {
		var tl = new TimelineMax();

		// tl.to(marker, 1, {left: 100});
		tl.staggerFrom([icon, marker], 0.8, {opacity:0, scale: 0.5, ease:Bounce.easeOut}, 0.05);
	});
});