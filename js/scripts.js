$(document).ready(function() {


	// console.log($("[class]").length);
	// var classNameArr = [];

	// for(var countClass = 0; countClass <= ($("[class]").length - 1); ++countClass) {

	// 	classNameArr.push( "."+$("[class]:eq("+countClass+")").attr("class")+"{}\n");

	// }

	// alert(classNameArr);


	// var indexChoiseFile;

	 // $(function (){

	 	// var indexChoiseFile = $("#chose_file").index();

	 	// console.log(indexChoiseFile);

        //     if($("#chose_file").length)
        //     {
        //         $("#chose_file").click(function(){

        //         	var indexChoiseFile = $("#chose_file").index();

        //             $("#chose_file_input:eq("+ indexChoiseFile +")").click();
        //             return(false);
        //         });

        //         $("#chose_file_input:eq("+ indexChoiseFile +")").change(function(){
        //             $("#chose_file_text:eq("+ indexChoiseFile +")").html($(this).val());
        //         }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
        //     }
        // });


	$(document).scroll(function() {
		
		getScrollToTopBtn();
		
	});


	 $(".chose_file").click(function(){

	 	var indexChoiseFile = $(".chose_file").index(this);

	 	$(".chose_inpt:eq("+ indexChoiseFile +")").click();

        return(false);

	 });


	 $(".prew-arrow").click(function() {

	 	$(".bx-prev").click();

	 	console.log(">>>>>");

	 });


	 $(".next-arrow").click(function() {

	 	$(".bx-next").click();

	 	console.log("<<<<<<");

	 });

	var w = window,
	d = document,
	e = d.documentElement,
	g = d.getElementsByTagName('body')[0],
	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;



	 // $(function() {

	 // 	var marginVal = 0;
	 // 	var marginModule = 1;

	 // 	var countTestimonials = 3;

	 // 	var  nextSlide;

		// if (bodyWidth <= 960) {
		// 	countTestimonials = 3;
		// 	// getSlider();
		// }

		// if (bodyWidth <= 768) {
		// 	countTestimonials = 2;
		// 	// getSlider();
		// }

		// if(bodyWidth <= 480) {
		// 	countTestimonials = 1;
		// 	// getSlider();
		// }

	 // 	$(window).resize(function() {

	 // 		clearInterval(nextSlide);

	 // 		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

	 // 		if (bodyWidth <= 960) {

	 // 			countTestimonials = 3;

	 // 		}

	 // 		if (bodyWidth <= 768) {
		// 		countTestimonials = 2;
		// 		// getSlider();
		// 	}

	 // 		if(bodyWidth <= 480) {

	 // 			countTestimonials = 1;

	 // 		}

	 // 		getSlider();

	 // 	});

	 // 	getSlider();


	 // 	 	function getSlider() {

	 // 	 		clearInterval(nextSlide);
	 		
	 // 		$(".testimonial").outerWidth($(".testimonials-slider").width() / countTestimonials);

		// 	$(".slider-box").width($(".testimonial").outerWidth() * ($(".testimonial").length) );



		//  // marginVal = parseInt($(".slider-box").css("margin-left"));

		//  nextSlide = setTimeout(function() {

		//  	$(".next").click();

		//  }, 5000);


		//  function testmonialSlide(){

		// 	 nextSlide = setTimeout(function() {

		// 	 	$(".next").click();
			 	
		// 	 }, 5000);

		//  }



		//  $(".prew, .next").click(function() {

		//  		clearInterval(nextSlide);

		// 		marginVal = parseInt($(".slider-box").css("margin-left"));

		// 		// marginVal = $(".slider-box").css("margin-left");

		// 		marginModule = 1;

		// 		if( $(this).hasClass("next") && $(".slider-box").css("margin-left") != "0px") {

		// 			if(marginVal <= ( -1 * ( $(".slider-box").width() - ( $(".testimonial").outerWidth() * countTestimonials) ) ) ) {

		// 				$(".slider-box").stop().animate({"margin-left": 0 + "px" }, 700);

		// 				console.log("next" +"  "+marginVal +"  "+$(".slider-box").css("margin-left"));

		// 				// if($(".slider-box").css("margin-left") != "0px") {
		// 				// 	$(".slider-box").css({"margin-left": 0 + "px" });
		// 				// }
		// 				testmonialSlide();
		// 				return false;

		// 			}
				 	
		// 			console.log("next" +"  "+marginVal);

		// 		}

		// 		if ($(this).hasClass("prew")) {

		// 			marginModule = -1;

		// 			if(marginVal >= 0) {

		// 				$(".slider-box").stop().animate({"margin-left": 0 + "px" }, 700);

		// 				console.log("next" +"  "+marginVal +"  "+$(".slider-box").css("margin-left"));

		// 				// if($(".slider-box").css("margin-left") != "0px") {
		// 				// 	$(".slider-box").css({"margin-left": 0 + "px" });
		// 				// }
		// 				testmonialSlide();
		// 				return false;

		// 			}
					
		// 			console.log("prew"+"  "+marginVal);					

		// 		}

		// 		$(".slider-box").stop().animate({"margin-left": ( marginVal - ( $(".testimonial").outerWidth() * marginModule ) ) + "px" }, 300);
			
		// 		testmonialSlide();

		// 	});
	 // 	} 



	 // 	});



		 // $(".next").click(function() {

		 // 	// marginVal = parseInt($(".slider-box").css("margin-left"));

		 // 	$(".slider-box").animate({"margin-left": (marginVal - $(".testimonial").outerWidth() ) + "px" }, 300);
			
			// if(marginVal <= ( -1 * ( $(".slider-box").width() - ( $(".testimonial").outerWidth() * 3) ) ) ) {

			// 	// marginVal = 0;

			// 	$(".slider-box").stop().animate({"margin-left": 0 + "px" }, 300);

			// 	return false;

			// }

		 // });

		 // $(".prew").click(function() {

		 // 	marginVal = parseInt($(".slider-box").css("margin-left"));	 	

		 // 	$(".slider-box").animate({"margin-left": (marginVal + $(".testimonial").outerWidth() ) + "px" }, 300);


			// if(marginVal >= 0 ) {

			// 	// marginVal = 0;

			// 	$(".slider-box").stop().animate({"margin-left": 0 + "px" }, 300);

			// 	return false;

			// }

		 // });

// });
var showArrowInterval;

getRightArrow(bodyWidth);


$(window).resize(function() {

	clearInterval(showArrowInterval);

	getRightArrow(bodyWidth);

});



	function getRightArrow(bodyWidth) {
		
		showArrowInterval = setTimeout(function() {

			if(bodyWidth <= 768 && bodyWidth >= 480) {

				$(".howmakeorder-arrow-right:odd").css({"display":"none"});

			} else {

				$(".howmakeorder-arrow-right:odd").css({"display":"inline-block"});

			}

		}, 500);

	}


	//  Показать кнопку прокрутки в вверх страницы
	function getScrollToTopBtn() {

		if ($(window).scrollTop() >= $(".headersite").height() ) {

        	$('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }
	}

 
    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });





});
