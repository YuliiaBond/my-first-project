var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('.intro');
	text.classList.add('red');
	var img = document.querySelector('.descktop');
	img.style.display = 'none';
}
var a = {
	'getElementById' :function () {}
}

$(function () {
	$(window).scroll(function() {
	    $('#future .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill-free').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})