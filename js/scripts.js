$(document).ready(function() {


	var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


	var showArrowInterval;

	var indexChoiseFile;

	getRightArrow(bodyWidth);


	$(document).scroll(function() {
		
		getScrollToTopBtn();
		
	});

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		clearInterval(showArrowInterval);

		getRightArrow(bodyWidth);

	});


	 $(".chose_file").click(function(){

	 	indexChoiseFile = $(".chose_file").index(this);

	 	$(".chose_inpt:eq("+ indexChoiseFile +")").click();

        return(false);

	 });


	 $(".prew-arrow").click(function() {

	 	$(".bx-prev").click();

	 });


	 $(".next-arrow").click(function() {

	 	$(".bx-next").click();

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
