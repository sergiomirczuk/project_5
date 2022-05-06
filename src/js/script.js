$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHeight: false,
		prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prevArrow.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../icons/nextArrow.svg"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
				  dots: true,
				  arros: false
				} }
		]
	  });
  });