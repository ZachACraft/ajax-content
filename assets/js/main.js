$('.nav-item').click(function(e) {
	e.preventDefault();
	var href = $(this).find('a').attr('href');
	$.ajax({
		url: href,
		type:'GET',
		success: function(data){
			var newTitle = $(data).filter('title').text();
			$('.content-wrapper').html($(data).find('.content-wrapper').html());
			document.title = newTitle;
			window.history.pushState(data, newTitle, href);
		}
	});
});

window.addEventListener('popstate', function(e) {
	if (e.state) {			
		var oldTitle = $(e.state).filter('title').text();
		document.title = oldTitle;
		$('.content-wrapper').html($(e.state).find('.content-wrapper').html());
	}
});
