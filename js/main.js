$(function(){
    $('#query').submit(function(e) {
        e.preventDefault();

		var giphyUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=facepalm'
		$.get(giphyUrl, function(result) {
			$('#giphy').attr('src', result.data.image_original_url);
		});
    });
});
