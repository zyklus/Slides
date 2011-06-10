(function(){
	var slideset = window.location.hash.replace('#', '').split('|')[0];
	$.get('slides/' + slideset + '.html', function(html){
		$('.slides').html(html);
		loadSlideSets();

		$('head title').text($('body title:eq(0)').remove().text());
	});

	function loadSlideSets(){
		var slidesets = $('.slideset'),
		      counter = slidesets.length;

		if(counter){
			slidesets.each(function(){
				var slideset = $(this);
				$.get('slides/' + slideset.attr('name') + '.html', function(html){
					slideset.replaceWith(html);

					if(!(--counter)){ loadSlideSets(); }
				});
			});
		}else{
			initSlideShow();
		}
	};

	function initSlideShow(){
		var slideshow = new SlideShow($('.slide').get());
	}
})();