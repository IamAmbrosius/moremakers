

      $(function(){
        $(".why_right").on('click', function(){
          $('.why_right_p1').removeClass('why_right_p');
          $(this).find('.why_right_p1').toggleClass('why_right_p');


        });
      });




      $(function(){
        $('#nav').click(function(){
          $('.why_right').Toggle(100);
        });
      });
      






//smoothscroll
	$(function() {
				  $('a[href*="#"]:not([href="#"])').click(function() {
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					  var target = $(this.hash);
					  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					  if (target.length) {
						$('html, body').animate({
						  scrollTop: target.offset().top
						}, 3000);
						return false;
					  }
					}
				  });
				});




   






      //button u js
      			(function(){

      			var date,
      				toggleScrollToTopLink = function(){

      					if($("body").scrollTop() >300 || $("html").scrollTop() > 300){

      						date.fadeIn(2000);
      					}

      					else{

      						date.fadeOut(1000);
      					}



      				};
      			$(document).ready(function(){
      				date = $(".scroll");


      				$(window).scroll(toggleScrollToTopLink);
      				toggleScrollToTopLink();

      			});

      		})();






          (function(){

          var date,
            toggleScrollToTopLink = function(){

              if($("body").scrollTop() >0 || $("html").scrollTop() > 0){

                date.fadeOut(2000);
              }

              else{

                date.fadeIn(1000);
              }



            };
          $(document).ready(function(){
            date = $("#index_down");


            $(window).scroll(toggleScrollToTopLink);
            toggleScrollToTopLink();

          });

        })();



