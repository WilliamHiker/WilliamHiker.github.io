$(window).load(function() {
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
		function centerInit() {

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top": topMargin + "px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top": heroTopMargin + "px"
			});

		}

		$(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function() {

	initializeSite();
	(function() {
		setTimeout(function() {
			window.scrollTo(0, 0);
		}, 0);
	})();

});
/* END ------------------------------------------------------- */


// $('#countdown').countdown({
// 	date: "December 13, 2017 18:03:26",
// 	render: function(data) {
// 		var el = $(this.el);
// 		// setInterval(function() {
// 		// 	console.log("111");

// 		// 	var date = new Date(),
// 		// 	var sec = date.getMilliseconds();
// 		// 	el.empty()
// 		// 		//.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
// 		// 		.append("<div>" + sec + " <span>days</span></div>")
// 		// 		.append("<div>" + sec + " <span>hrs</span></div>")
// 		// 		.append("<div>" + sec + " <span>min</span></div>")
// 		// 		.append("<div>" + sec + " <span>sec</span></div>");
// 		// }, 1000);
// el.empty()
// 				//.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
// 				.append("<div>" + sec + " <span>days</span></div>")
// 				.append("<div>" + sec + " <span>hrs</span></div>")
// 				.append("<div>" + sec + " <span>min</span></div>")
// 				.append("<div>" + sec + " <span>sec</span></div>");
// 	}
// });
