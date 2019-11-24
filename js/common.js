$(function(){

	// $(".filters").ionRangeSlider({
	//         min: 100,
	//         max: 1000,
	//         from: 550
 //    	});

	// $(".gallery").owlCarousel({
	// 	loop:true,
	// 	items: 5,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	nav: true,
	// 	dots: true,
	// 	navText: ['&lsaquo;', '&rsaquo;'],
	// 	navElement: 'a',
	// 	margin: 20
	// });

	// $(".reviews").owlCarousel({
	// 	loop:true,
	// 	items: 2,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	nav: true,
	// 	dots: false,
	// 	navText: ['&lsaquo;', '&rsaquo;'],
	// 	navElement: 'a',
	// 	margin: 100
	// });

	// $(".actions").owlCarousel({
	// 	loop:true,
	// 	items: 1,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	nav: true,
	// 	dots: false,
	// 	navText: ['&lsaquo;', '&rsaquo;'],
	// 	navElement: 'a',
	// 	margin: 0
	// });

	// $(".production").owlCarousel({
	// 	loop:true,
	// 	items: 4,
	// 	autoplay: true,
	// 	autoplayHoverPause: true,
	// 	nav: true,
	// 	dots: false,
	// 	navText: ['&lsaquo;', '&rsaquo;'],
	// 	navElement: 'a',
	// 	margin: 10
	// });

	// var $range = $(".js-range-slider");
	// $range.ionRangeSlider({
	// 	type: "double",
	// 	min: 1,
	// 	max: 15,
	// 	from: 5,
	// 	to: 10,
	// 	onFinish: function() {
	// 		// alert($(".irs-from").text());
	// 	}
	// });

	// $(".menu__link").on("click", function() {
	// 	$("html, body").stop().animate({
	// 		scrollTop: $($(this).attr("href")).offset().top
	// 	}, 500);
	// });


	// if (!device.tablet() && !device.mobile()) {
	// 	$(".bl10").css("background", "none");
	// 	$(".player").YTPlayer();
	// 	var filters = {
	// 		brightness: 60
	// 	}
	// 	$(".player").YTPApplyFilters(filters);
	// }

});


// $(function () {
    //ie detection

    // if ($.browser.msie && $.browser.version == 10) {
    //     $("html").addClass("ie10");
    // }
    // if ($.browser.msie && $.browser.version == 9) {
    //     $("html").addClass("ie9");
    // }
    // if ($.browser.msie && $.browser.version == 8) {
    //     $("html").addClass("ie8");
    // }
// });


$(document).ready(function() {


	$(".js-nav-toggle").click(function(){
		
	});

// Themes Scripts



// var offset = $('.main-title').offset().top();
// console.log(offset);
// $(window).scroll(function() {
// 	if ($(window).scrollTop() > offset) {
// 		$(".screen-1").addClass('js-joke');
// 	}
// 	else $(".menu").removeClass('top-menu');
// });

// var topPadding = 0;
// $(window).scroll(function() {
//     if ($(window).scrollTop() > offset.top) {
//         $('.main-title').stop().animate({marginTop: $(window).scrollTop() - offset.top + topPadding},{duration:0});
//         $('.screen-1').addClass('js-joke');
//     }
//     else {
//         $('nav').stop().animate({marginTop: 0});
//         $('nav').css("opacity", "1");
//     }
// });

var offset = $(".main-title").offset();
var top = offset.top - 70;
$(window).scroll(function() {
	if ($(window).scrollTop() > top) {
		$('.screen-1').addClass('js-joke');
	}
	else {
		$('.screen-1').removeClass('js-joke');
	}
});


$(".js-toggler").click(function(){
	$(".menu__mobile").addClass('show');
});
$(".close, .menu__link").click(function(){
	$(".menu__mobile").removeClass('show');
});



	// Plagin Scripts

// 	$('.play').magnificPopup({
// 		disableOn: 700,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,

// 		fixedContentPos: false
// 	});

// 	$('.popup-modal').magnificPopup({
// 			type: 'inline',
// 			preloader: false,
// 			focus: '#username',
// 			modal: true
// 		});
// 		$(document).on('click', '.popup-modal-dismiss', function (e) {
// 			e.preventDefault();
// 			$.magnificPopup.close();
// 	});


// $('.image-popup-no-margins').magnificPopup({
// 		type: 'image',
// 		closeOnContentClick: true,
// 		closeBtnInside: false,
// 		fixedContentPos: true,
// 		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
// 		image: {
// 			verticalFit: true
// 		},
// 		zoom: {
// 			enabled: true,
// 			duration: 300 // don't foget to change the duration also in CSS
// 		}
// 	});





	// $(".form-pop form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
	// 	var phone = $(".form-pop input[type='tel']").val();
	// 	var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
	// 	if (phone.search(regex) == -1) {
	// 		alert("Укажите правильный номер телефона!");
	// 		return false;
	// 	}
	// 	return true;
	// });

	// $(".bl3 form").on("submit", function() {  // Проверяем номер типа +7 (999) 999-9999
	// 	var phone = $(".bl3 input[type='tel']").val();
	// 	var regex = /\+7 \(\d{3}\) \d{3}\-\d{4}/;
	// 	if (phone.search(regex) == -1) {
	// 		alert("Укажите правильный номер телефона!");
	// 		return false;
	// 	}
	// 	return true;
	// });





	// $('.popup-gallery').magnificPopup({
	// 	delegate: 'a',
	// 	type: 'image',
	// 	tLoading: 'Loading image #%curr%...',
	// 	mainClass: 'mfp-img-mobile',
	// 	gallery: {
	// 		enabled: true,
	// 		navigateByImgClick: true,
	// 		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	// 	},
	// });




	// $('.popup-with-form').magnificPopup({
	// 	type: 'inline',
	// 	preloader: false,
	// 	focus: '#name',

	// 	// When elemened is focused, some mobile browsers in some cases zoom in
	// 	// It looks not nice, so we disable it:
	// 	callbacks: {
	// 		beforeOpen: function() {
	// 			if($(window).width() < 700) {
	// 				this.st.focus = false;
	// 			} else {
	// 				this.st.focus = '#name';
	// 			}
	// 		}
	// 	}
	// });


	// $("input[type='tel']").inputmask({"mask": "+7 (999) 999-9999"});


	// $('.popup-youtube').magnificPopup({
	// 	disableOn: 700,
	// 	type: 'iframe',
	// 	mainClass: 'mfp-fade',
	// 	removalDelay: 160,
	// 	preloader: false,

	// 	fixedContentPos: false
	// });

});