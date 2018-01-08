$(function() {
		
		
		// navigation click actions	
		$('.scroll-link').on('click', function(event){
			event.preventDefault();
			var sectionID = $(this).attr("data-id");
			scrollToID('#' + sectionID, 750);
		});
		// scroll to top action
		$('.scroll-top').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow'); 		
		});
		// mobile nav toggle
		$('#nav-toggle').on('click', function (event) {
			event.preventDefault();
			$('#bs-example-navbar-collapse-1').toggleClass("open");
		});
		
	
	// scroll function
	function scrollToID(id, speed){
		var offSet = 100;
		var targetOffset = $(id).offset().top - offSet;
		var mainNav = $('#bs-example-navbar-collapse-1');
		$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 300) {
		   $('.header-top').addClass('fixed-header');
		}
		else {
		   $('.header-top').removeClass('fixed-header');
		}
	});
	// hide #back-top first
    $("#back-top").hide();


	$(window).scroll(function () {
            if ($(this).scrollTop() >= 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
      
            }
        });
		
		
		
	
});
