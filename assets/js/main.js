(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		new WOW().init();
		// Magnific Popup starts
		$('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
					enabled: true
				}
		})

		// Owl carousel
		$('.special_menu').owlCarousel({
			items: 3,
			loop:true,
			autoplay:true,
			dots: true,
			responsive: {
				992:{
					items: 2
				},
				768:{
					items: 2
				},
				320:{
					items: 1
				}
			}
		});

		$('.customer_carousel').owlCarousel({
			items: 2,
			loop:true,
			autoplay:true,
			dots: true,
			responsive: {
				992:{
					items: 2
				},
				768:{
					items: 2
				},
				320:{
					items: 1
				}
			}
		});
		// Owl Carousel ends

		// SlickNav
		$('#menu').slicknav();

		// isotope
		$('.iso-nav').click(function(){
	        $('.iso-nav').removeClass('active');
	        $(this).addClass('active');

	        var selector = $(this).attr('data-filter');
	        $('.iso-items').isotope({
	            filter: selector
	        });
	        return false;
		});

		$('.tlt').textillate({
			selector: '.texts', 
		    loop: true ,
			reverse: true,
			outEffects: [ 'hinge' ],
		  });

	});


	jQuery(window).load(function () {

		/* Sticky Header */
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header-fixed').addClass("sticky");
			} else {
				$('.header-fixed').removeClass("sticky");
			}
		});
	});

	$('.progress-bar').each(function() {

  var valueNow = $(this).attr('aria-valuenow');

  $(this).animate({
    
    width: valueNow + '%',

    percent: 100

  }, {

    progress: function(a, p, n) {

      $(this)
        .css('width', (valueNow * p + '%'))
        .html(Math.round(valueNow * p) + '%');

    }

  });

});

	/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 600,
      "density": {
        "enable": true,
        "value_area": 3500
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

}(jQuery));